setInterval(()=>{
   let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30*htime + (mtime/2);
    let mrotation = 6*mtime;
    let srotation = 6*stime;
    
    let hourR = document.getElementById("hour");  
    hourR.style.transform = `rotate(${hrotation}deg)` ;
    let minuteR = document.getElementById("minute");
    minuteR.style.transform = `rotate(${mrotation}deg)` ;
    let secondR = document.getElementById("second");
    secondR.style.transform = `rotate(${srotation}deg)` ;

},1000)