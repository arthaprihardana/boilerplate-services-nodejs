/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 11:44:37 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:46:37
 */
import Departments from '../models/mysql/departments';

export const getDepartment = (req, res, next) => {
    Departments.findAll({
        attributes: ['dept_no', 'dept_name']
    }).then(v => res.send({
        status: true,
        statusCode: res.statusCode,
        message: 'Get all departments',
        data: v
    }))
}