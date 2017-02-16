function drawGraph() {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    c.width = 640;
    c.height = 640;
    xaxis = c.width;
    yaxis = c.height;
    newNum = new ComplexNum(0,0);
    pixelIdentifier = 0;
    maxiterations = 200;
    fill = 0;
    document.getElementById("realVal").defaultValue = 0.7;
    document.getElementById("imaginaryVal").defaultValue = 0.29;
    reC = document.getElementById("realVal").value;
    imC = document.getElementById("imaginaryVal").value;
    
    for(var y=0; y<yaxis; y++) {
        for(var x=0; x<xaxis; x++) {
            drawJuliaSet(x, y);
            pixelIdentifier++;
        }
    }
    
    
    ctx.beginPath();
    lineWidth = 1;
    
    ctx.moveTo(Math.round(xaxis/2)+0.5, 0.5);
    ctx.lineTo(Math.round(xaxis/2)+0.5, yaxis+0.5);
    ctx.moveTo(0.5,Math.round(yaxis/2)+0.5);
    ctx.lineTo(xaxis+0.5, Math.round(yaxis/2)+0.5);
    
    
    ctx.stroke();
    
    return false;
}

function drawJuliaSet(x, y) {
    newNum = new ComplexNum((x-(xaxis/2))/200, (y-(yaxis/2))/200);
    newNum.testinf(pixelIdentifier);
    ctx.fillRect(x,y,1,1);
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
    };
}

class ComplexNum {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    testinf(testPix) {
        var newreal;
        var newimag;
        var oldreal;
        var oldimag;
        newreal = newNum.real;
        newimag = newNum.imag;
        
        var i;
        for(i=0; i<maxiterations; i++) {
            oldreal = newreal;
            oldimag = newimag;
            newreal = (oldreal*oldreal)+(-(oldimag*oldimag))-reC;
            newimag = 2*(oldimag*oldreal)-imC;
            if((newreal*newreal)+(newimag*newimag)>4) {
                break;
            }
            
        }
        fill = HSVtoRGB((i%361)/360, 100/100, (100*(i<maxiterations))/100);
        ctx.fillStyle = "rgb("+fill.r+","+fill.g+","+fill.b+")";
    }
    
}
