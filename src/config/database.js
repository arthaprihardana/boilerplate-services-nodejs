/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-22 09:19:47 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-23 09:54:43
 */
import Sequelize from 'sequelize';
let DB_CONFIG;

switch (process.env.SELECT_DB) {
    case "postgresql":
        // PostgreSQL
        break;
    case "mongodb":
        // MongoDB
        break;
    default:
        // MySQL
        DB_CONFIG = new Sequelize(
            process.env.MYSQL_DATABASE, 
            process.env.MYSQL_USERNAME, 
            process.env.MYSQL_PASSWORD, 
            {
                host: 'localhost',
                port: 3306,
                dialect: 'mysql',
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                protocol: null,
                logging: false,
                define: {
                    // underscored: false,
                    freezeTableName: true,
                    // charset: 'utf8',
                    // dialectOptions: {
                    //     collate: 'utf8_general_ci'
                    // },
                    timestamps: false
                }
            }
        )
        break;
}

export default DB_CONFIG;