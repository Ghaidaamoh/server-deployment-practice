'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('express server', () => {
    it('shoud check the hello world works successfully', async () => {
        // arrange
        let param = '/';
        let status = 200;
        let text = 'Hello World!';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('shoud check the data it works successfully', async () => {
        // arrange
        let param = '/data';
        let status = 200;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

    it('should check 500 errors', async () => {
        // arrange
        let param = '/bad';
        let status = 500;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    });

    it('shoud check 404 not found errors', async () => {
        // arrange
        let param = '/notfound';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });
});