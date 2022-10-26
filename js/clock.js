let name = prompt ("Lütfen isminizi girin");
document.getElementById("myName").innerHTML = name ;

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function showTime() {
    const today = new Date();
    let d = days[today.getDay()];
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
   
    document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second + " "+d;
    setTimeout(showTime, 1000);
  }

showTime()