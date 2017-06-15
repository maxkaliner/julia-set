function drawGraph() {
    document.getElementById("realVal").defaultValue = 0.7;
    
    document.getElementById("imaginaryVal").defaultValue = 0.29;
    
    document.getElementById("zoom").defaultValue = 185;
    
    document.getElementById("maxiterations").defaultValue = 200;
    
    document.getElementById("xpos").defaultValue = 0;
    
    document.getElementById("ypos").defaultValue = 0;
    
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    c.width = 400;
    c.height = 400;
    xaxis = c.width;
    yaxis = c.height;
//    newNum = new ComplexNum(0,0);
    pixelIdentifier = 0;
    fill = 0;
    reC = document.getElementById("realVal").value;
    imC = document.getElementById("imaginaryVal").value;
    zoom = document.getElementById("zoom").value;
    maxiterations = document.getElementById("maxiterations").value;
    xpos = document.getElementById("xpos").value;
    ypos = document.getElementById("ypos").value;
    
    keypressed = false;
    b = 0;
    
    
    
    
    function download() {
        var dt = canvas.toDataURL('image/jpeg');
        this.href = dt;
    };
    downloadLnk.addEventListener('click', download, false);
    
    eventdown = function(evt) {
        mouseposdown = getMousePos(canvas, evt);
    }
    
    makeHighRes(c);
    
    event = function event(evt) {
        mouseposup = getMousePos(canvas, evt);
        if(keypressed) {
            document.getElementById("realVal").value = (mouseposup.x-(xaxis/2))/(zoom);
            document.getElementById("imaginaryVal").value =
            -(mouseposdown.y-(yaxis/2))/(zoom);
        }
        else if(mouseposup.x!=mouseposdown.x && mouseposup.y!=mouseposdown.y){
            document.getElementById("xpos").value -=
            (-(((mouseposup.x-mouseposdown.x)/zoom)));
            document.getElementById("ypos").value -=
            (-(((mouseposdown.y-mouseposup.y)/zoom)));
        }
        else {
            document.getElementById("xpos").value -= (mouseposup.x-(xaxis/2))/(zoom);
            document.getElementById("ypos").value -=
            -(mouseposdown.y-(yaxis/2))/(zoom);
        }
        
        document.getElementsByTagName("IMG")[0].removeAttribute("hidden");
        
        drawGraph();
    }
    
    function keypresstrue(evt) {
        // if(evt.keyCode==16) {
        keypressed = true;
        // }
        
    }
    function keypressfalse(evt) {
        // if(evt.keyCode==16) {
        keypressed = false;
        // }
    }
    
    
    
    if(typeof q == 'undefined') {
        q=1;
        canvas.addEventListener('mousedown', eventdown, false);
        canvas.addEventListener('mouseup', event, false);
        canvas.addEventListener('keydown', keypresstrue, false);
        canvas.addEventListener('keyup', keypressfalse, false);
        
    }
    
    
    
    
    
    
    
    
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
        x: evt.clientX-rect.left,
        y: evt.clientY-rect.top-0.125
        };
    }
    
    
    
    for(var y=0; y<yaxis; y++) {
        for(var x=0; x<xaxis; x++) {
            drawJuliaSet(x, y);
            pixelIdentifier++;
        }
    }
    
    
    ctx.beginPath();
    lineWidth = 1;
    
    ctx.moveTo(Math.round(xaxis/2)+0.5+(zoom*xpos), 0.5-2*(zoom));
    ctx.lineTo(Math.round(xaxis/2)+0.5+(zoom*xpos), yaxis+0.5+2*(zoom));
    
    ctx.moveTo(0.5-2*(zoom),Math.round(yaxis/2)+0.5-(zoom*ypos));
    ctx.lineTo(xaxis+0.5+2*(zoom), Math.round(yaxis/2)+0.5-(zoom*ypos));
    ctx.stroke();
    
    
    
    
    
    return false;
}

function drawJuliaSet(x, y) {
    newNum = new ComplexNum((x-(xaxis/2))/zoom-xpos,
                            ((y-(yaxis/2))/zoom)+1*ypos);
    
    newNum.testinf(pixelIdentifier);
    ctx.fillRect(x,y,1,1);
}

function zoomsliderfunc() {
    document.getElementById("zoom").value = Math.pow(2,(document.getElementById("zoomslider").value)/500);
    drawGraph();
}

function makeHighRes(c) {
    // finally query the various pixel ratios
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;
    var ratio = devicePixelRatio / backingStoreRatio;
    // upscale canvas if the two ratios don't match
    if (devicePixelRatio !== backingStoreRatio) {
        
        var oldWidth = c.width;
        var oldHeight = c.height;
        c.width = Math.round(oldWidth * ratio);
        c.height = Math.round(oldHeight * ratio);
        c.style.width = oldWidth + 'px';
        c.style.height = oldHeight + 'px';
        // now scale the context to counter
        // the fact that we've manually scaled
        // our canvas element
        ctx.scale(ratio, ratio);
    }
}
