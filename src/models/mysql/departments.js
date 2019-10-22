/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 11:28:20 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:44:35
 */
import db from '../../config/database';
import Sequelize from 'sequelize';

const Departments = db.define('departments', {
    dept_no: {
        type: Sequelize.CHAR(4),
        allowNull: false,
        primaryKey: true
    },
    dept_name: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
    }
}, {
    
});

export default Departments;