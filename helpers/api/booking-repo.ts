import { db } from 'helpers/api';

export const bookingRepo = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
};

async function create(params) {
  const booking = await db.Booking.create(params);
  return booking;
}

async function getAll() {
  const bookings = await db.Booking.findAll();
  return bookings;
}

async function getById(bookingId) {
  const booking = await db.Booking.findByPk(bookingId);

  if (!booking) throw new Error('Booking not found');

  return booking;
}

async function update(bookingId, params) {
  const booking = await db.Booking.findByPk(bookingId);

  if (!booking) throw new Error('Booking not found');

  Object.assign(booking, params);
  await booking.save();
  return booking;
}

async function _delete(bookingId) {
  const booking = await db.Booking.findByPk(bookingId);

  if (!booking) throw new Error('Booking not found');

  await booking.destroy();
}
