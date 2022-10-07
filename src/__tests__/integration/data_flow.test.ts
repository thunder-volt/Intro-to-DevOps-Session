import {app} from '../../app';
import request from 'supertest';
import {data} from '../../data';
import assert from "assert";

it('should pass the data flow', async () => {
    await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([])

    await request(app)
        .post('/')
        .set('Content-Type', 'text/plain')
        .send('test')
        .expect(201)
        .expect('Content-Type', "application/json; charset=utf-8")
        .expect(['test'])

    assert (data.get().length === 1);

    await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(['test'])

    await request(app)
        .post('/')
        .set('Content-Type', 'text/plain')
        .send('test2')
        .expect(201)
        .expect('Content-Type', "application/json; charset=utf-8")
        .expect(['test', 'test2'])

    assert (data.get().length === 2);

    await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(['test', 'test2'])

    await request(app)
        .delete('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(['test'])

    assert (data.get().length === 1);

    await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(['test'])

    await request(app)
        .delete('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([])

    assert (data.get().length === 0);

    await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([])
})