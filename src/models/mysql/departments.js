/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 11:28:20 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-23 09:44:35
 */
import db from '../../config/database';
import Sequelize, { Model } from 'sequelize';

// const Departments = db.define('departments', {
//     dept_no: {
//         type: Sequelize.CHAR(4),
//         allowNull: false,
//         primaryKey: true,
//         field: 'dept_no'
//     },
//     dept_name: {
//         type: Sequelize.STRING(40),
//         allowNull: false,
//         unique: true,
//         field: 'dept_name'
//     }
// }, {
    
// });

class Departments extends Model {
    get DeptNo() {
        return this.dept_no;
    }

    get DeptName() {
        return this.dept_name;
    }
}

Departments.init({
    dept_no: {
        type: Sequelize.CHAR(4),
        allowNull: false,
        primaryKey: true,
        field: 'dept_no'
    },
    dept_name: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        field: 'dept_name'
    }
}, {
    sequelize: db,
    modelName: 'departments',
    tableName: 'departments'
})

export default Departments;