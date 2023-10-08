import { apiHandler, bookingRepo } from 'helpers/api';
import _ from 'lodash'

export default apiHandler({
  get: getBookings,
  post: createBooking,
  put: updateBooking,
  delete: deleteBooking,
});

async function getBookings(req, res) {
  const {bookingId} = req.query;
  if (!_.isEmpty(bookingId)) {
    try {
      const booking = await bookingRepo.getById(bookingId);
      console.log("booking",booking)
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    try {
      const bookings = await bookingRepo.getAll();
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }  
}



async function createBooking(req, res) {
  try {
    const booking = await bookingRepo.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function updateBooking(req, res) {
  try {
    const bookingId = req.query.id;
    await bookingRepo.update(bookingId, req.body);
    return res.status(200).json({ message: 'Booking updated successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteBooking(req, res) {
  try {
    const bookingId = req.query.id;
    await bookingRepo.delete(bookingId);
    return res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
