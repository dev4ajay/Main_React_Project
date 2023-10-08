import { apiHandler, vendorsRepo } from 'helpers/api';

export default apiHandler({
    get: getVendors,
    post: createVendor,
    put: updateVendor,
    delete: deleteVendor
});

async function getVendors(req, res) {
    const vendors = await vendorsRepo.getAll();
    return res.status(200).json(vendors);
}

async function createVendor(req, res) {
    try {
        await vendorsRepo.create(req.body);
        return res.status(201).json({ message: 'Vendor created successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function updateVendor(req, res) {
    try {
        const vendorId = req.query.id;
        await vendorsRepo.update(vendorId, req.body);
        return res.status(200).json({ message: 'Vendor updated successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function deleteVendor(req, res) {
    try {
        const vendorId = req.query.id;
        await vendorsRepo.delete(vendorId);
        return res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
