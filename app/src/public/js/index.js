'use strict'
const btn = document.querySelector("button"),
    table = document.querySelector("table"),
    rows = table.rows,
    cells = [];

btn.addEventListener('click',visitors);

function visitors(){
    console.log("click");
    fetch("/api/getVisitors")
        .then((res)=>res.json())
        .then((res)=>{
            const visitors = JSON.parse(res);
            for(var i=1; i<(visitors.length)+1; i++){
                for(var j=0; j<rows[i].cells.length; j++){
                    rows[i].cells[j].innerHTML=visitors[i-1].date;
                    rows[i].cells[j].innerHTML=visitors[i-1].contents;
    
                }
            }
            console.log("loaded");
        })
        .catch((err)=>{
            console.error("데이터 로드 중 오류발생");
        });
}