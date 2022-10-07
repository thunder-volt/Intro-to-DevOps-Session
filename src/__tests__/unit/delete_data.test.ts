import {app} from '../../app';
import request from 'supertest';
import {data} from '../../data';

describe('DELETE /', () => {
    beforeEach(() => {
        data.clear();
    })
    it('should return 200 OK', () => {
        return request(app).delete('/').expect(200);
    });
    it('should return an array', () => {
        return request(app).delete('/').expect('Content-Type', /json/);
    });
    it('should return an array containing no data', () => {
        return request(app).delete('/').expect([]);
    });
    it('should return an array containing no data', () => {
        data.push('test');
        return request(app).delete('/').expect([]);
    });
    it('should return an array containing data', () => {
        data.push('test');
        data.push('test2');
        return request(app).delete('/').expect(['test']);
    });
})