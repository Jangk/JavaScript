function func()
{
    var strName     = prompt("이름 입력");
    var fAge        = prompt("나이");
    document.querySelector("#Test").innerHTML = strName + fAge;
}

function funcOpen()
{
    var a = document.querySelector("#openItem");
    alert(a);
    
}

function funcClose()
{
}


let gameobject = {
    name: "gg",
    other : "몰루"
}
var strName         = prompt("이름 입력");
var dateNowDate     = new Date();               
var strDateDisplay  = dateNowDate.toLocaleTimeString();
Math.floor(Math.random());
document.write("<big>" + strName + "님이 "+ strDateDisplay + "에 입장하셨습니다.");

``
//alert("메세지 박스");