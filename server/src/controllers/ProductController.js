const connection = require("../database/connection");

module.exports = {
    async index(req, res) {    
        const products = await connection("products").select('*')
        
        return res.json(products);
      }
}