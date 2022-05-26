'use strict'

const { default: axios } = require("axios")

function visitors(){
    axios({
        method: "GET",
        url: "api/getVistiors",
    }).then((res)=>{
        //res를 front에 적용
        console.log(res);
    }).catch(error=>{
        console.error(errror);
    })
}