import {app} from '../../app';
import request from 'supertest';
import {data} from '../../data';

describe('GET /', () => {
    beforeEach(() => {
        data.clear();
    })
    it('should return 201 OK', () => {
        // add the header of content type and send
        return request(app)
            .post('/')
            .set('Content-Type', 'text/plain')
            .send('test')
            .expect(201);
    });
    it('should return an array', () => {
        return request(app)
            .post('/')
            .set('Content-Type', 'text/plain')
            .send('test')
            .expect('Content-Type', "application/json; charset=utf-8");
    });
    it('should return an array containing data', () => {
        return request(app)
            .post('/')
            .set('Content-Type', 'text/plain')
            .send('test')
            .expect(['test']);
    });
    it('should return array with existing data and new data', () => {
        data.push('test');
        return request(app)
            .post('/')
            .set('Content-Type', 'text/plain')
            .send('test2')
            .expect(['test', 'test2']);
    })
})