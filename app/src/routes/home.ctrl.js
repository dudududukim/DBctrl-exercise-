'use strict';

const visits = require("../../src/models/visits");


const output = {
    home: (req, res) => {
        //브라우저에서 /요청이 오면 이렇게 하겠다
        res.render('index');
        //./view안해도 되는게 app.set에서 views를 ./views로 했기때문에
    },
}

const data = {
    visitors: async (req, res)=>{
        const visitorsData = await visits.getVisitors();
        console.log(`controller : ${visitorsData}`);
        return res.json(visitorsData);
    }
}

module.exports = {
    output,
    data,
    // process,
};
