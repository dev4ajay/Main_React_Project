import getConfig from 'next/config';
import { Sequelize, DataTypes } from 'sequelize';
import { Pool } from 'pg';

const { serverRuntimeConfig } = getConfig();

const db = {
  initialized: false,
  initialize,
  User: undefined,
  Car: undefined,
  Vendor: undefined,
  Trip: undefined,
  Booking: undefined,
};

export { db };

// initialize db and models, called on first api request from /helpers/api/api-handler.js
async function initialize() {
  // create db if it doesn't already exist
  if (db.initialized) {
    return; // Return if already initialized
  }

  const { host, port, user, password, database } = serverRuntimeConfig.dbConfig;

  // Create a connection pool with SSL enabled
  const pool = new Pool({
    connectionString: `${process.env.POSTGRES_URL}?sslmode=require`,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  // connect to db
  const sequelize = new Sequelize({
    dialect: 'postgres',
    database,
    username: user,
    password,
    host,
    port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  // init models and add them to the exported db object
  db.Car = carModel(sequelize);
  db.Vendor = vendorModel(sequelize);
  db.User = userModel(sequelize);
  db.Trip = tripModel(sequelize);
  db.Booking = bookingModel(sequelize);

  // define associations
  db.Car.belongsTo(db.Vendor, { foreignKey: 'vendor_id' });

  // sync all models with database
  await sequelize.sync({ alter: true });
  db.initialized = true;
  console.log('Database connected');
}

// sequelize models with schema definitions

function carModel(sequelize) {
  const attributes = {
    car_name: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    license_plate: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    seats: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    interior_images: { type: DataTypes.JSONB, allowNull: true },
    exterior_images: { type: DataTypes.JSONB, allowNull: true },
    vendor_id: { type: DataTypes.INTEGER, allowNull: false },
  };

  const options = {
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    tableName: 'Car', // Specify the table name if different from the model name
  };

  return sequelize.define('Car', attributes, options);
}

function vendorModel(sequelize) {
  const attributes = {
    name: { type: DataTypes.STRING(100), allowNull: false },
    contact_number: { type: DataTypes.STRING(20), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false },
    commission_rate: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    address: { type: DataTypes.STRING(255), allowNull: false },
  };

  const options = {
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    tableName: 'Vendor', // Specify the table name if different from the model name
  };

  return sequelize.define('Vendor', attributes, options);
}

function tripModel(sequelize) {
  const options = {
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    tableName: 'Trip', // Specify the table name if different from the model name
  };

  const Trip = sequelize.define('Trip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_type: {
      type: DataTypes.ENUM('one_way', 'round_trip', 'airport_transfer'),
      allowNull: false,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pick_location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    drop_location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    total_distance_km: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, options);

  Trip.associate = (models) => {
    Trip.belongsTo(models.Car, { foreignKey: 'car_id' });
    Trip.belongsTo(models.Vendor, { foreignKey: 'vendor_id' });
  };

  return Trip;
}

function bookingModel(sequelize) {
  const options = {
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    tableName: 'Booking', // Specify the table name if different from the model name
  };

  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer_contact_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.STRING(255),
    },
    trip_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    vendor_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    trip_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pickup_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    drop_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pickup_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    return_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    pickup_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    booking_status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
      defaultValue: 'pending',
    },
    payment_status: {
      type: DataTypes.ENUM('pending', 'paid', 'refunded'),
      defaultValue: 'pending',
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    total_distance_km: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    customer_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, options);

  Booking.associate = (models) => {
    Booking.belongsTo(models.Trip, { foreignKey: 'trip_id' });
    Booking.belongsTo(models.Vendor, { foreignKey: 'vendor_id' });
  };

  return Booking;
}

function userModel(sequelize) {
  const attributes = {
    username: { type: DataTypes.STRING, allowNull: false },
    hash: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
  };

  const options = {
    defaultScope: {
      // exclude password hash by default
      attributes: { exclude: ['hash'] },
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {} },
    },
    tableName: 'User', // Specify the table name if different from the model name
  };

  return sequelize.define('User', attributes, options);
}
