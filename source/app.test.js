const server = require('./app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Root Endpoints', () => {
    it('GET / check app running', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
    })
})