//here we are importing dotenv in different way 
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT
}