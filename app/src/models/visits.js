const { resolveInclude } = require("ejs");
const db = require("../config/db");
const query = "SELECT * FROM visitors;"

class visits{
    static getVisitors(){
        return new Promise((resolve, reject)=>{
            db.query(query,(err, data)=>{
                console.log(data);
                if(err) reject(`${err}`);
                else resolve(data);
            });
        })
    }
}

module.exports = visits;