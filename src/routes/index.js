/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-09 14:12:24 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:29:13
 */
import express from 'express';
import departments from './departments';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200);
    console.log('test')
    res.send({
        status: true,
        statusCode: res.statusCode,
        message: "Sukses terkoneksi dengan API",
        data: [{
            "apiVersion": "1.0.0",
            "apiName": "Boilerplate core services",
            "author": "Artha Prihardana",
            "email": "arthaprihardana@gmail.com"
        }]
    });
});

router.use('/', departments);

export default router;