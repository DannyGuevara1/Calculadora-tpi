const Calculadora = () =>{
    this.sumar =  ()=>{
        document.getElementById("suma").addEventListener("click",function(){
            let display = document.getElementById("display");
            a = display.innerText;
            signo = "+";
            let miTexto = document.getElementById("Clear").value;
            document.getElementById("display").innerText = " ";
        })
    }

    this.Res = () =>{
            let display = document.getElementById("display");
            display.textContent= " ";
            let a = 0;
            let b = 0;
            let signo="";
        
    }
    this.rest = () =>{
        let display = document.getElementById("display");
        display.textContent= " ";
        let a = 0;
        let b = 0;
        let signo="";
    }
    this.respuesta = () =>{
        
            let display = document.getElementById("display");
            let respuesta = 0;
            switch (signo) {
                case "+":
                    respuesta = parseFloat(a) + parseFloat(b) ;
                    break;
                case "-":
                        respuesta = parseFloat(a) - parseFloat(b) ;
                    break;
                case "*":
                        respuesta = parseFloat(a) * parseFloat(b) ;
                    break;
                case "/":
                        respuesta = parseFloat(a) / parseFloat(b) ;
                    break;
                default:
                    break;
            }
            rest();
            display.innerHTML = respuesta;
        
    }

    return {sumar,Res,respuesta}
}
console.log(Calculadora.prototype)
let a;
let b;
let signo;
const Cal = Calculadora();
Cal.sumar();
Cal.Res()
Cal.respuesta();
function calBasica(sumar){
    Calculadora.call(this,sumar);
}
// calBasica.prototype = Object.create(Calculadora.prototype);
// calBasica.prototype.constructor =  calBasica;
document.getElementById("num7").addEventListener("click",function(){
    let miTexto = document.getElementById("num7").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num8").addEventListener("click",function(){
    let miTexto = document.getElementById("num8").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num9").addEventListener("click",function(){
    let miTexto = document.getElementById("num9").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})

document.getElementById("num4").addEventListener("click",function(){
    let miTexto = document.getElementById("num4").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num5").addEventListener("click",function(){
    let miTexto = document.getElementById("num5").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num6").addEventListener("click",function(){
    let miTexto = document.getElementById("num6").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})

document.getElementById("num1").addEventListener("click",function(){
    let miTexto = document.getElementById("num1").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num2").addEventListener("click",function(){
    let miTexto = document.getElementById("num2").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})
document.getElementById("num3").addEventListener("click",function(){
    let miTexto = document.getElementById("num3").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})

document.getElementById("num0").addEventListener("click",function(){
    let miTexto = document.getElementById("num0").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})

document.getElementById("punto").addEventListener("click",function(){
    let miTexto = document.getElementById("punto").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = display.innerText + miTexto;
})

document.getElementById("Res").addEventListener("click",function(){
    let display = document.getElementById("display");
    b = display.innerText;
    Cal.respuesta();
    
})




