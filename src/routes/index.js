/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-09 14:12:24 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-21 16:11:13
 */
import express from 'express';
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
            "apiName": "Point Of Sales",
            "author": "Artha Prihardana",
            "email": "arthaprihardana@gmail.com"
        }]
    });
});

export default router;