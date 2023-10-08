import { db } from 'helpers/api';

export const carsRepo = {
    get,
    create,
    getAll,
    update,
    delete: _delete
};

async function create(params) {
    const car = await db.Car.create(params);
    return car;  

}

async function get(id) {
    return await db.Car.findByPk(id);
}

async function getAll() {
    return await db.Car.findAll();
}

async function update(id, params) {
    
    const car = await db.Car.findByPk(id);

    if (!car) throw 'Car not found';

    Object.assign(car, params);
    await car.save();
    return car;

}

async function _delete(id) {
    const car = await db.Car.findByPk(id);

    if (!car) throw 'Car not found';

    await car.destroy();
}
