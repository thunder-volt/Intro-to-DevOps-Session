import express, {Request, Response, text} from 'express';
import {data} from "./data";

const app = express();
app.use(text());


app.get('/', (req:Request, res:Response) => {
    res.status(200).json(data.get());
});

app.post('/', (req:Request, res:Response) => {
    data.push(req.body);
    res.status(201).json(data.get());
});

app.delete('/', (req:Request, res:Response) => {
    data.pop();
    res.status(200).json(data.get());
});


export {app};