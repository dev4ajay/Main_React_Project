import { apiHandler, tripsRepo, carsRepo, vendorsRepo } from 'helpers/api';
import _ from 'lodash';

export default apiHandler({
    get: getTrips,
    post: createTrip,
    put: updateTrip,
    delete: deleteTrip
});

async function getTrips(req, res) {
  try {
    const { tripType } = req.query;
    const { tripId } = req.query;

    let trips;
    if (!_.isEmpty(tripId)) {
      const trip = await tripsRepo.get(tripId);
      trips = [trip]; // Wrap the single trip in an array
    } else {
      trips = await tripsRepo.getByType(tripType);
    }

    const tripsWithDetails = await Promise.all(
      trips.map(async (trip) => {
        const car = await carsRepo.get(trip.car_id);
        const vendor = await vendorsRepo.get(trip.vendor_id);

        const tripWithDetails = {
          ...trip.toJSON(),
          car: car.toJSON(),
          vendor: vendor.toJSON(),
        };

        return tripWithDetails;
      })
    );

    return res.status(200).json(tripsWithDetails);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
  
  

async function createTrip(req, res) {
    try {
        await tripsRepo.create(req.body);
        return res.status(201).json({ message: 'Trip created successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function updateTrip(req, res) {
    try {
        const tripId = req.query.id;
        await tripsRepo.update(tripId, req.body);
        return res.status(200).json({ message: 'Trip updated successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function deleteTrip(req, res) {
    try {
        const tripId = req.query.id;
        await tripsRepo.delete(tripId);
        return res.status(200).json({ message: 'Trip deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
