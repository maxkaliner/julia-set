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
        if(!(document.getElementById("mandelbrot").checked)) {
            newreal = newNum.real;
            newimag = newNum.imag;
        }
        else {
            newreal = 0;
            newimag = 0;
            reC = newNum.real;
            imC = newNum.imag;
        }
        var smoothcolor = Math.exp(-Math.sqrt(Math.pow(newreal,2)+Math.pow(newimag,2)));
        
        var i;
        
        if(document.getElementById("quadeq").checked) {
            for(i=0; i<maxiterations; i++) {
                oldreal = newreal;
                oldimag = newimag;
                newreal = (oldreal*oldreal)+(-(oldimag*oldimag))-reC;
                newimag = 2*(oldimag*oldreal)-imC;
                smoothcolor += Math.exp(-Math.sqrt(Math.pow(newreal,2)+Math.pow(newimag,2)));
                if((newreal*newreal)+(newimag*newimag)>4) {
                    break;
                }
                
            }
        }
        if(document.getElementById("cubiceq").checked) {
            for(i=0; i<maxiterations; i++) {
                oldreal = newreal;
                oldimag = newimag;
                newreal = (oldreal*oldreal*oldreal)+(-(3*oldimag*oldimag*oldreal))-reC;
                newimag = (3*oldimag*oldreal*oldreal)+(-(oldimag*oldimag*oldimag))-imC;
                smoothcolor += Math.exp(-Math.sqrt(Math.pow(newreal,2)+Math.pow(newimag,2)));
                if((newreal*newreal)+(newimag*newimag)>4) {
                    break;
                }
                
            }
        }
        if(document.getElementById("quarticeq").checked) {
            for(i=0; i<maxiterations; i++) {
                oldreal = newreal;
                oldimag = newimag;
                newreal = (oldreal*oldreal*oldreal*oldreal)+(-(6*oldimag*oldimag*oldreal*oldreal))+(oldimag*oldimag*oldimag*oldimag)-reC;
                newimag = (4*oldimag*oldreal*oldreal*oldreal)+(-(4*oldimag*oldimag*oldimag*oldreal))-imC;
                smoothcolor += Math.exp(-Math.sqrt(Math.pow(newreal,2)+Math.pow(newimag,2)));
                if((newreal*newreal)+(newimag*newimag)>4) {
                    break;
                }
                
            }
        }
        if(document.getElementById("mandelbrot").checked) {
            for(i=0; i<maxiterations; i++) {
                oldreal = newreal;
                oldimag = newimag;
                newreal = (oldreal*oldreal)+(-(oldimag*oldimag))-reC;
                newimag = 2*(oldimag*oldreal)-imC;
                smoothcolor += Math.exp(-Math.sqrt(Math.pow(newreal,2)+Math.pow(newimag,2)));
                if((newreal*newreal)+(newimag*newimag)>4) {
                    break;
                }
                
            }
        }
        
        smoothcolor = (0.95+10*smoothcolor);
        if(smoothcolor>360) {
            smoothcolor = 360;
        }
        smoothcolor = smoothcolor/(3/2)+120*2
        
        
        fill = HSVtoRGB(((smoothcolor))/360, 100/100, ((i<maxiterations)));
        
        
        ctx.fillStyle = "rgb("+(fill.r)+","+(fill.g)+","+(fill.b)+")";
        // ctx.fillStyle = "rgb("+(255-fill.r)%256+","+(255-fill.g)%256+","+(255-fill.b)%256+")";
        // ctx.fillStyle = "rgb("+(255-fill.r)+","+(255-fill.g)+","+(255-fill.b)+")";
//        ctx.fillStyle = "rgb("+(Math.sin(i/3))+","+(Math.cos(i/6))+","+(Math.cos(i/12+3.14/4))+")";

    }
    
    
}
