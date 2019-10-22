/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 13:27:03 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:35:35
 */
import express from 'express';
import {
    getDepartment
} from '../controllers/departments';

const router = express.Router();

router.route('/departments')
    .get(getDepartment)

export default router;