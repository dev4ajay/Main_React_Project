import { db } from 'helpers/api';
import _ from 'lodash'

export const tripsRepo = {
  create,
  get,
  getByType,
  update,
  delete: _delete
};

async function create(trip) {
    try {
      // Calculate the total distance and total price based on the car's price per km
      const car = await db.Car.findByPk(trip.car_id);
      if (!car) {
        throw new Error(`Car not found with ID: ${trip.car_id}`);
      }
      
      const totalDistance = trip.total_distance_km;
      const totalPrice = car.price * totalDistance;
  
      // Create a new trip in the database
      const newTrip = await db.Trip.create({
        trip_type: trip.trip_type,
        car_id: trip.car_id,
        vendor_id: trip.vendor_id,
        pick_location: trip.pick_location,
        drop_location: trip.drop_location,
        total_distance_km: totalDistance,
        total_price: totalPrice
      });
  
      return newTrip;
    } catch (error) {
      console.error('Error creating trip:', error);
      throw error;
    }
  }

async function get(id) {
  const trip = await db.Trip.findByPk(id);
  return trip;
}

async function getByType(type) {
  if(!_.isEmpty(type)) {
    const trips = await db.Trip.findAll({ where: { trip_type: type }});
    return trips;
  } else {
    const trips = await db.Trip.findAll();
    return trips;
  } 
}


async function update(id, updatedTrip) {
  const trip = await db.Trip.findByPk(id);

  // Update the trip with the new values
  trip.trip_type = updatedTrip.trip_type;
  trip.car_id = updatedTrip.car_id;
  trip.vendor_id = updatedTrip.vendor_id;
  trip.pick_location = updatedTrip.pick_location;
  trip.drop_location = updatedTrip.drop_location;
  trip.total_distance_km = updatedTrip.total_distance_km;

  // Calculate the total price based on the car's price per km
  const car = await db.Car.findByPk(updatedTrip.car_id);
  const totalPrice = car.price * updatedTrip.total_distance_km;
  trip.total_price = totalPrice;

  await trip.save();

  return trip;
}

async function _delete(id) {
  const trip = await db.Trip.findByPk(id);
  await trip.destroy();
}
