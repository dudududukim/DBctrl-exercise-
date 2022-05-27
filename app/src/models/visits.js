const db = require("../config/db");


class visits{
    static getVisitors(){
        const query = "SELECT * FROM visitors;"
        return new Promise((resolve, reject)=>{
            db.query(query,(err, rows, fields)=>{
                if(err) reject(`${err}`);
                else resolve(JSON.stringify(rows));
            });
        });
    }
}

module.exports = visits;