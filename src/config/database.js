/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 09:19:47 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:43:47
 */
import Sequelize from 'sequelize';
import logSymbols from 'log-symbols';

// MySQL
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USERNAME, 
    process.env.MYSQL_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default sequelize;