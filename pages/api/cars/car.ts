import { apiHandler, carsRepo } from 'helpers/api';

export default apiHandler({
    get: getCars,
    post: createCar,
    put: updateCar,
    delete: deleteCar
});

async function getCars(req, res) {
    const cars = await carsRepo.getAll();
    return res.status(200).json(cars);
}

async function createCar(req, res) {
    try {
        const car = await carsRepo.create(req.body);
        return res.status(201).json(car);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function updateCar(req, res) {
    try {
        const carId = req.query.id;
        const car = await carsRepo.update(carId, req.body);
        return res.status(200).json(car);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function deleteCar(req, res) {
    try {
        const carId = req.query.id;
        await carsRepo.delete(carId);
        return res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
