function addText() {
    
    let indexLuna = 0;
    const staticTextLuna = " ☾  Luna Itzel  ☽";
    const textLuna = document.getElementById("textLuna");

    const writingLuna = () => {
        if (indexLuna < staticTextLuna.length) {
            textLuna.innerHTML += staticTextLuna.charAt(indexLuna);
            indexLuna++;
            setTimeout(writingLuna, 300);
            
            if (indexLuna+1 == staticTextLuna.length) {

                setTimeout(() => {
                    
                    writingVX();
                }, 500);
            }
        }
    }
    
    let indexVX = 0;
    const staticTexXV = "Mis XV años";        
    const textLuna2 = document.getElementById("textXV"); 

    const writingVX = () => {
        if (indexVX < staticTexXV.length) {
            textLuna2.innerHTML += staticTexXV.charAt(indexVX);
            indexVX++;
            setTimeout(writingVX, 300); 
        }
    }        

    writingLuna();
}


function countDown() {
    
    const daysRemaining = document.getElementById('daysRemaining');
    const hoursRemaining = document.getElementById('hoursRemaining');
    const minutesRemaining = document.getElementById('minutesRemaining');
    const secondsRemaining = document.getElementById('secondsRemaining');

    const targetDate = new Date("October 5, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysRemaining.innerHTML  = days + " <span class='fw-bold format-numbers-date'>Días</span>";
    hoursRemaining.innerHTML = hours +  " <span class='fw-bold format-numbers-date'>Horas</span>";
    minutesRemaining.innerHTML = minutes + " <span class='fw-bold format-numbers-date'>Minutos</span>";
    secondsRemaining.innerHTML = seconds + " <span class='fw-bold format-numbers-date'>Segundos</span>";    

    if (timeRemaining < 0) {
        clearInterval(interval);
        daysRemaining.innerHTML = "0 Días";
        hoursRemaining.innerHTML = "0 Horas";
        minutesRemaining.innerHTML = "0 Minutos";
        secondsRemaining.innerHTML = "0 Segundos";
    }
}

var canvasElement = document.getElementById('canvas');
var canvas = new fabric.Canvas('canvas');

function resizeCanvas() {    

    var windowWidth = (window.innerWidth - (window.innerWidth * 0.25));
    var windowHeight = (window.innerHeight - (window.innerHeight * 0.33));

    canvasElement.width = windowWidth;
    canvasElement.height = windowHeight;

    canvas.setWidth(windowWidth);
    canvas.setHeight(windowHeight);

    canvas.renderAll();
}

function clearCollage() {
    canvas.clear(); 
}

function addCollage(){

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    let image1 = { scale:0, left: 0, top: 0, angle:0 }
    let image2 = { scale:0, left: 0, top: 0, angle:0 }
    let image3 = { scale:0, left: 0, top: 0, angle:0 }
    let image4 = { scale:0, left: 0, top: 0, angle:0 }
    let image5 = { scale:0, left: 0, top: 0, angle:0 }
    let image6 = { scale:0, left: 0, top: 0, angle:0 }
    let image7 = { scale:0, left: 0, top: 0, angle:0 }
    let image8 = { scale:0, left: 0, top: 0, angle:0 }
    let image9 = { scale:0, left: 0, top: 0, angle:0 }
    let image10 = { scale:0, left: 0, top: 0, angle:0 }
    let image11 = { scale:0, left: 0, top: 0, angle:0 }
    let image12 = { scale:0, left: 0, top: 0, angle:0 }
    let image13 = { scale:0, left: 0, top: 0, angle:0 }
    let image14 = { scale:0, left: 0, top: 0, angle:0 }

    if (windowWidth > 1366) {        
        image1 = { scale:0.33, left: -14.95, top: 168.74, angle:25.00 }
        image2 = { scale:0.84, left: 1277.71, top: 204.40, angle:28.51 }
        image3 = { scale:1.16, left: 584.51, top: 50.02, angle:0 }
        image4 = { scale:0.30, left: 1133.09, top: 105.99, angle:314.16 }
        image5 = { scale:0.44, left: 859.76, top: -105.08, angle:0 }
        image6 = { scale:0.41, left: -125.98, top: 66.60, angle:329 }
        image7 = { scale:0.52, left: 514.02, top: 536.87, angle:0 }
        image8 = { scale:1.47, left: 112.98, top: 554.26, angle:338.35 }
        image9 = { scale:0.52, left: -19.86, top: 450.98, angle:41.54 }
        image10 = { scale:0.48, left: 1233.44, top: 559.96, angle:0 }
        image11 = { scale:0.35, left: 1075.10, top: 68.95, angle:47.85 }
        image12 = { scale:0.59, left: 220.88, top: 235.42, angle:0 }
        image13 = { scale:0.38, left: 258.41, top: 266.68, angle:273.85 }
        image14 = { scale:0.28, left: 897.59, top: 535.67, angle:345.33 }
    
    }
    
    if (1366 >= windowWidth  && windowWidth >= 1280) {        
        image1 = { scale:0.27, left: -11.22, top: 44.46, angle:25.00 }
        image2 = { scale:0.60, left: -32.30, top: 307.18, angle:0 }
        image3 = { scale:0.87, left: 366.29, top: -15.44, angle:0 }
        image4 = { scale:0.22, left: 590.82, top: -11.69, angle:0 }
        image5 = { scale:0.20, left: 558.71, top: 236.32, angle:342.10 }
        image6 = { scale:0.26, left: 236.17, top: 63.65, angle:151.45 }
        image7 = { scale:0.32, left: 341.84, top: 367.85, angle:0 }
        image8 = { scale:0.94, left: 153.81, top: -21.38, angle:0 }
        image9 = { scale:0.30, left: 763.09, top: 177.48, angle:0 }
        image10 = { scale:0.35, left: 577.36, top: 348.84, angle:0 }
        image11 = { scale:0.19, left: 359.17, top: 100.31, angle:59.30 }
        image12 = { scale:0.36, left: 148.12, top: 386.65, angle:335.86 }
        image13 = { scale:0.26, left: 829.81, top: 596.09, angle:245.52 }
        image14 = { scale:0.19, left: 761.74, top: -3.54, angle:0 }    
    }

    if (windowWidth <= 500) {        

        image1 = { scale:0.22, left: 1.78, top: 175.96, angle:37.52 }
        image2 = { scale:0.41, left: 265.55, top: 379.56, angle:35.81 }
        image3 = { scale:0.75, left: 67.95, top: 145.79, angle:0 }
        image4 = { scale:0.12, left: 203.59, top: 275.01, angle:269.63 }
        image5 = { scale:0.32, left: 237.83, top: -98.43, angle:0 }
        image6 = { scale:0.28, left: 152.83, top: -0.50, angle:133.70 }
        image7 = { scale:0.20, left: 73.28, top: 473.20, angle:0 }
        image8 = { scale:0.72, left: -31.98, top: 400.45, angle:0 }
        image9 = { scale:0.23, left: -58.28, top: 117.69, angle:341.93 }
        image10 = { scale:0, left: 0, top: 0, angle:0 }
        image11 = { scale:0.24, left: 252.24, top: 667.02, angle:123.74 }
        image12 = { scale:0.30, left: 143.31, top: 575.62, angle:329.14 }
        image13 = { scale:0.18, left: 218.09, top: 454.04, angle:252.39 }
        image14 = { scale:0.16, left: 75.99, top: -9.33, angle:0 }
    }

    fabric.Image.fromURL('./assets/images/collage/12.jpeg', function(img) {

        img.scale(image12.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image12.left,
            top: image12.top,
            angle: image12.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 1000);
    });

    fabric.Image.fromURL('./assets/images/collage/11.jpeg', function(img) {

        img.scale(image11.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image11.left,
            top: image11.top,
            angle: image11.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 2000);
    });

    fabric.Image.fromURL('./assets/images/collage/6.jpeg', function(img) {

        img.scale(image6.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image6.left,
            top: image6.top,
            angle: image6.angle,
            selectable: false,
            opacity: 0,
            stroke: 'white',
            strokeWidth: 10
        });
        
        setTimeout(function() {            
            canvas.add(img);
            fabric.util.animate({
                startValue: 0,
                endValue: 1,
                duration: 2000,
                onChange: function(value) {
                    img.set('opacity', value);
                    canvas.renderAll();
                },
                onComplete: function() {}
            });
        }, 3000);
    });

    fabric.Image.fromURL('./assets/images/collage/8.jpeg', function(img) {

        img.scale(image8.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image8.left,
            top: image8.top,
            angle: image8.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
            canvas.add(img);
            fabric.util.animate({
                startValue: 0,
                endValue: 1,
                duration: 2000,
                onChange: function(value) {
                    img.set('opacity', value);
                    canvas.renderAll();
                },
                onComplete: function() {}
            });
        }, 4000);
    });

    fabric.Image.fromURL('./assets/images/collage/1.jpeg', function(img) {

        img.scale(image1.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image1.left,
            top: image1.top,
            angle: 25,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 5000);
    });

    fabric.Image.fromURL('./assets/images/collage/2.jpeg', function(img) {

        img.scale(image2.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image2.left,
            top: image2.top,
            angle: image2.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 6000);
    });    
    
    fabric.Image.fromURL('./assets/images/collage/4.jpeg', function(img) {

        img.scale(image4.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image4.left,
            top: image4.top,
            angle: image4.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 7000);
    });

    fabric.Image.fromURL('./assets/images/collage/5.jpeg', function(img) {

        img.scale(image5.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image5.left,
            top: image5.top,
            angle: image5.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 8000);
    });  

    fabric.Image.fromURL('./assets/images/collage/7.jpeg', function(img) {

        img.scale(image7.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image7.left,
            top: image7.top,
            angle: image7.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 9000);
    });    

    fabric.Image.fromURL('./assets/images/collage/9.jpeg', function(img) {

        img.scale(image9.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image9.left,
            top: image9.top,
            angle: image9.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 10000);
    });    

    fabric.Image.fromURL('./assets/images/collage/10.jpeg', function(img) {

        img.scale(image10.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image10.left,
            top: image10.top,
            angle: image10.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 11000);
    });           

    fabric.Image.fromURL('./assets/images/collage/13.jpeg', function(img) {

        img.scale(image13.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image13.left,
            top: image13.top,
            angle: image13.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 12000);
    });  
    
    
    fabric.Image.fromURL('./assets/images/collage/14.jpeg', function(img) {

        img.scale(image14.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image14.left,
            top: image14.top,
            angle: image14.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 13000);
    }); 

    fabric.Image.fromURL('./assets/images/collage/3.jpeg', function(img) {

        img.scale(image3.scale);

        img.set({
            width:img.width,
            height:img.height,
            left: image3.left,
            top: image3.top,
            angle: image3.angle,
            selectable: false,
            stroke: 'white',
            strokeWidth: 10
        });

        setTimeout(function() {
        canvas.add(img);
        fabric.util.animate({
            startValue: 0,
            endValue: 1,
            duration: 2000,
            onChange: function(value) {
                img.set('opacity', value);
                canvas.renderAll();
            },
            onComplete: function() {}
        });
        }, 14000);
    });

    canvas.on('object:moving', function(e) {
        var activeObject = e.target;
        console.log("-------------------");        
        console.log("scale: " + activeObject.scaleX.toFixed(2));
        console.log("Left: " + activeObject.left.toFixed(2));
        console.log("Top: " + activeObject.top.toFixed(2));
        console.log("angle: " + activeObject.angle.toFixed(2));
    });
    
}




function openWhatsapp() {

    window.open( 'https://wa.me/2282691544', '_blank');    
}

var isPlay = false;

function playMusic(isPlayTemp, isOne) {

    const music = document.getElementById("music");                 
    const musicButton = document.getElementById("music-button");                 

    if (isPlayTemp === true && isPlay === false) {
        
        isPlay = true;
    }else{
        
        isPlay = false;
    }    

    pausar = () => {
        music.pause();
    }

    reproducir = () => {
        music.play();
    }
    
    if (isOne) {

        document.addEventListener('click', () => { 
            
            musicButton.classList.remove('paused');
            musicButton.classList.add('playing');

            reproducir();

        }, { once: true });

        return;
    }

    
    if (isPlay && !isOne) {
        
        musicButton.classList.remove('paused');
        musicButton.classList.add('playing');
        
        reproducir();
        
    }else{
        
        musicButton.classList.remove('playing');
        musicButton.classList.add('paused');

        pausar();
    }

}

document.addEventListener("DOMContentLoaded", function() {
    
    AOS.init();

    window.scrollTo(0, 0);

    addText();
    
    const interval = setInterval(countDown, 1000);
    
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('aos:in:carrusel', ({ detail }) => {
        
        addCollage();
    });

    document.addEventListener('aos:in:carrusel', ({ detail }) => {

        clearCollage();
    });
    
    playMusic(true, true);
});