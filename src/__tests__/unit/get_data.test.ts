import {app} from '../../app';
import request from 'supertest';
import {data} from '../../data';

describe('GET /', () => {
    beforeEach(() => {
        data.clear();
    })
    it('should return 200 OK', () => {
        return request(app).get('/').expect(200);
    });
    it('should return an array', () => {
        return request(app).get('/').expect('Content-Type', /json/);
    });
    it('should return an array containing data', () => {
        data.push('test');
        return request(app).get('/').expect(['test']);
    });
})