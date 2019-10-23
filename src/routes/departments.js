/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 13:27:03 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-23 13:26:04
 */
import express from 'express';
import {
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
} from '../controllers';

const router = express.Router();

router.route('/departments')
    .get(getDepartment)
    .post(createDepartment)
    .put(updateDepartment)
    .delete(deleteDepartment)

router.route('/departments/:dept_no')
    .put(updateDepartment)
    .delete(deleteDepartment)

export default router;