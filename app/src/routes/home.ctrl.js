'use strict';

// const logger = require("../../config/logger");
// const User = require("../../models/User");
// const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res) => {
        //브라우저에서 /요청이 오면 이렇게 하겠다
        res.render('index');
        //./view안해도 되는게 app.set에서 views를 ./views로 했기때문에
    },
}
//     login: (req, res) => {
//         //localhost:3000/login으로 접속시
//         res.render('home/login');
//     },
//     register:(req, res) =>{
//         res.render('home/register');
//     },
// }

// const process = {
//     login: async (req, res) =>{
//         const user = new User(req.body);
//         const response = await user.login();
//         //login이 async이기 때문에 login을 실행시키는 부분에도 async가 있어서
//         //await의 처리가 양호핟
//         const url = {
//             method: "POST",
//             path: "/login",
//             status: response.err ? 400 : 200,
//         };
//         log(response,url);
//         return res.status(url.status).json(response);
        
//     },
//     register:async (req, res)=>{
//         const user = new User(req.body);
//         const response = await user.register();
//         const url = {
//             method: "POST",
//             path: "/register",
//             status: response.err ? 500 : 201,
//         };
//         log(response, url);
//         return res.status(url.status).json(response);
//     },
// }

module.exports = {
    output,
    // process,
};
