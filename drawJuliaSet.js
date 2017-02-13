function drawGraph() {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    c.width = 640;
    c.height = 480;
    xaxis = c.width;
    yaxis = c.height;
    newNum = [];
    pixelIdentifier = 0;
    
    for(var x=0; x<xaxis; x++) {
        for(var y=0; y<yaxis; y++) {
            drawJuliaSet(x, y);
            pixelIdentifier++;
        }
    }
    console.log(newNum)
    newNum[200000].testinf(200000);
    
    ctx.beginPath();
    lineWidth = 1;
    
    ctx.moveTo(Math.round(xaxis/2)+0.5, 0.5);
    ctx.lineTo(Math.round(xaxis/2)+0.5, yaxis+0.5);
    ctx.moveTo(0.5,Math.round(yaxis/2)+0.5);
    ctx.lineTo(xaxis+0.5, Math.round(yaxis/2)+0.5);
    ctx.stroke();


}

function drawJuliaSet(x, y) {
    newNum[pixelIdentifier] = new ComplexNum((x-(xaxis/2))/100, (y-(yaxis/2))/100);
    if(newNum[pixelIdentifier].testinf(pixelIdentifier)<-100) {
        ctx.fillStyle = "#5555ff";
    }
    else {
        ctx.fillStyle = "#0000ff";
    }
    ctx.fillStyle = "#5555ff";
    ctx.fillRect(x,y,1,1);
}

class ComplexNum {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    testinf(testPix) {
        var real = newNum[testPix].real;
        var imag = newNum[testPix].imag
        for(var i=0; i<9; i++) {
            real = (real*real)+(-(imag*imag));
            imag = 2*(imag*real);
//            console.log(real);
//            console.log(imag);
        }
       return imag;
    }

}
