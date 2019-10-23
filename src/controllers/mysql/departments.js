/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 11:44:37 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-23 13:25:42
 */
import Departments from '../../models/mysql/departments';

export const getDepartment = (req, res, next) => {
    Departments.findAll({
        attributes: ['dept_no', 'dept_name']
    }).then(response => res.send({
        status: true,
        statusCode: res.statusCode,
        message: 'Get data successfully',
        data: response
    }));
}

export const createDepartment = (req, res, next) => {
    Departments.create(req.body)
        .then(response => {
            res.status(201)
            res.send({
                status: true,
                statusCode: res.statusCode,
                message: 'Create successfully',
                data: response
            })
        })
        .catch(err => {
            res.status(406)
            res.send({
                status: false,
                statusCode: res.statusCode,
                message: 'Oops, something went wrong!',
                data: {
                    message: err.original.sqlMessage,
                    errors: err.errors,
                }
            })
        })
}

export const updateDepartment = (req, res, next) => {
    Departments.update(req.body, {
        where: {
            dept_no: req.query.dept_no || req.params.dept_no
        }
    }).then(response => {
        res.status(202)
        res.send({
            status: true,
            statusCode: res.statusCode,
            message: 'Update successfully',
            data: response
        })
    }).catch(err => {
        res.status(406)
        res.send({
            status: false,
            statusCode: res.statusCode,
            message: 'Oops, something went wrong!',
            data: err
        })
    })
}

export const deleteDepartment = (req, res, next) => {
    Departments.destroy({
        where: {
            dept_no: req.query.dept_no || req.params.dept_no
        }
    }).then(response => {
        res.status(200)
        res.send({
            status: true,
            statusCode: res.statusCode,
            message: 'Delete successfully',
            data: response
        })
    }).catch(err => {
        res.status(406)
        res.send({
            status: false,
            statusCode: res.statusCode,
            message: 'Oops, something went wrong!',
            data: err
        })
    })
}