var box = document.getElementById('bx');
var circle = document.getElementById('cr');
var tp = 0;
var left = 0

document.addEventListener('keydown',function (e){
    
    if(e.key=='ArrowRight'){
        box.style.left = `${++left}%`
        console.log('right');
    }else if(e.key=='ArrowDown'){
        box.style.top = `${++tp}%`
        console.log('down');
    }else if(e.key=='ArrowLeft'){
        box.style.left = `${--left}%`
        console.log('left');
    }else if(e.key=='ArrowUp'){
        box.style.top = `${--tp}%`
        console.log('up')
    }

    if(left>38 && left<54 && tp>27 && tp<58){
        circle.style.backgroundColor = "green";
    }else{
        circle.style.backgroundColor = "red";

    }
})