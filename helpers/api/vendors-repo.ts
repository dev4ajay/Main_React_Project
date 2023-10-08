import { db } from 'helpers/api';

export const vendorsRepo = {
    get,
    create,
    getAll,
    update,
    delete: _delete
};

async function create(params) {
    const vendor = new db.Vendor(params);
    await vendor.save();
}

async function get(id) {
    return await db.Vendor.findByPk(id);
}



async function getAll() {
    return await db.Vendor.findAll();
}

async function update(id, params) {
    const vendor = await db.Vendor.findByPk(id);

    if (!vendor) throw 'Vendor not found';

    Object.assign(vendor, params);
    await vendor.save();
}

async function _delete(id) {
    const vendor = await db.Vendor.findByPk(id);

    if (!vendor) throw 'Vendor not found';

    await vendor.destroy();
}
