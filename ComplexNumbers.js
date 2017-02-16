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
