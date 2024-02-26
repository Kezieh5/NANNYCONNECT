const request = require('supertest');
const app = require('../app');

describe('Caregiver Routes', () => {
    it('should get all caregivers', async () => {
        const res = await request(app).get('/caregivers');
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    // Add more test cases for other routes
});
