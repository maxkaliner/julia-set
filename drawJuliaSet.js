function drawGraph() {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    c.width = 640;
    c.height = 640;
    xaxis = c.width;
    yaxis = c.height;
    newNum = new ComplexNum(0,0);
    pixelIdentifier = 0;
    fill = 0;
    document.getElementById("realVal").defaultValue = 0.7;
    document.getElementById("imaginaryVal").defaultValue = 0.29;
    reC = document.getElementById("realVal").value;
    imC = document.getElementById("imaginaryVal").value;
    document.getElementById("zoom").defaultValue = 185;
    zoom = document.getElementById("zoom").value;
    document.getElementById("maxiterations").defaultValue = 200;
    maxiterations = document.getElementById("maxiterations").value;
    document.getElementById("xpos").defaultValue = 0;
    document.getElementById("ypos").defaultValue = 0;
    xpos = document.getElementById("xpos").value;
    ypos = document.getElementById("ypos").value;
    
    
    for(var y=0; y<yaxis; y++) {
        for(var x=0; x<xaxis; x++) {
            drawJuliaSet(x, y);
            pixelIdentifier++;
        }
    }
    
    
    ctx.beginPath();
    lineWidth = 1;
    
    ctx.moveTo(Math.round(xaxis/2)+0.5+(zoom*xpos), 0.5-2*(zoom*ypos));
    ctx.lineTo(Math.round(xaxis/2)+0.5+(zoom*xpos), yaxis+0.5+2*(zoom*ypos));
    
    ctx.moveTo(0.5-2*(zoom*xpos),Math.round(yaxis/2)+0.5-(zoom*ypos));
    ctx.lineTo(xaxis+0.5+2*(zoom*xpos), Math.round(yaxis/2)+0.5-(zoom*ypos));
    
    
    ctx.stroke();
    
    return false;
}

function drawJuliaSet(x, y) {
    newNum = new ComplexNum((x-(xaxis/2))/zoom-xpos, ((y-(yaxis/2))/zoom)+1*ypos);
    newNum.testinf(pixelIdentifier);
    ctx.fillRect(x,y,1,1);
}

