'use strict'

const btn = document.querySelector("button");

btn.addEventListener('click',visitors);

function visitors(){
    fetch("/api/getVisitors", {
        method: "GET",
        headers:{
            'Content-Type': "application/json",
            //내가  보내는 데이터 형식을 지정
        },

    })
        .then((res)=>res.json())
        //이기 이 위에 친구가 promise로 return되서 다시 한번 .then 메서드 사용해서 console logd
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.error("데이터 로드 중 오류발생");
        });
}