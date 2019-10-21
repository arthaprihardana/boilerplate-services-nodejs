/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-09 13:43:15 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-21 14:50:53
 */
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import logSymbols from 'log-symbols';
import logger from 'morgan';
import createError from 'http-errors';

import '@babel/polyfill';
require('dotenv').config();

import routes from './routes';

// mongoose.connect(process.env.MONGO_DATABASE, {
//     autoIndex: false,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 500,
//     poolSize: 10,
//     bufferMaxEntries: 0,
//     useNewUrlParser: true
// });
// mongoose.connection.once('open', () => {
// 	console.log(`${logSymbols.success} Database connected`);
// });
// mongoose.Promise = require('bluebird');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(methodOverride());
app.use(compression());
app.use(cors({
    origin: '*', // * = global, jika memungkinkan ganti ke domain production
    optionsSuccessStatus: 200
}));

app.use('/', routes);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send({
        status: false,
        statusCode: res.statusCode,
        message: err.message,
        data: []
    })
});

export default app;