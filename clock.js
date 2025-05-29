setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotect = 30*htime + mtime/2;
    mrotect = 6*mtime + 0.1*stime;
    srotect = 6*stime;

    
    hours.style.transform = `rotate(${hrotect}deg)`;
    min.style.transform = `rotate(${mrotect}deg)`;
    sec.style.transform = `rotate(${srotect}deg)`;
}, 1000);