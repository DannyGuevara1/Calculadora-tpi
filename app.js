function Calculadora  (){
    let sumar =  ()=>{
        document.getElementById("suma").addEventListener("click",function(){
            let display = document.getElementById("display");
            a = display.innerText;
            signo = "+";
            let miTexto = document.getElementById("Clear").value;
            document.getElementById("display").innerText = " ";
        })
    }

    let Resta = () =>{
        document.getElementById("resta").addEventListener("click",function(){
            let display = document.getElementById("display");
            a = display.innerText;
            console.log(a);
            signo = "-";
            let miTexto = document.getElementById("Clear").value;
            document.getElementById("display").innerText = " ";
        })
        
    }
    let divicion = ()=>{
        document.getElementById("divicion").addEventListener("click",function(){
            let display = document.getElementById("display");
            a = display.innerText;
            console.log(a);
            signo = "/";
            let miTexto = document.getElementById("Clear").value;
            document.getElementById("display").innerText = " ";
        })
    }
    let multiplicacion = () =>{
        document.getElementById("multiplicacion").addEventListener("click",function(){
            let display = document.getElementById("display");
            a = display.innerText;
            console.log(a);
            signo = "*";
            let miTexto = document.getElementById("Clear").value;
            document.getElementById("display").innerText = " ";
        })
    }
    let rest = () =>{
        let display = document.getElementById("display");
        display.textContent= " ";
        let a = 0;
        let b = 0;
        let signo="";
    }
    let respuesta = () =>{
        
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
                case "^":
                        respuesta = Math.sqrt(parseFloat(a))  ;
                break;
                case "$":
                        respuesta = Math.abs(parseFloat(a))  ;
                break;
                default:
                    break;
            }
            rest();
            display.innerHTML = respuesta;
        
    }

    return {sumar,Resta,respuesta,rest,divicion,multiplicacion}
}

let a;
let b;
let signo;
console.log(Calculadora.prototype)

function calCientifica (){

}
calCientifica.prototype = Object.create(Calculadora.prototype)
calCientifica.prototype.constructor = calCientifica;
calCientifica.prototype.raiz = function(){
    document.getElementById("raiz").addEventListener("click",function(){
        let display = document.getElementById("display");
        a = display.innerText;
        signo = "^";
        let miTexto = document.getElementById("Clear").value;
        document.getElementById("display").innerText = " ";
    })
}
calCientifica.prototype.valor = function(){
    document.getElementById("va").addEventListener("click",function(){
        let display = document.getElementById("display");
        a = display.innerText;
        signo = "$";
        let miTexto = document.getElementById("Clear").value;
        document.getElementById("display").innerText = " ";
    })
}
let calculadoraCienfifica = new calCientifica();
calculadoraCienfifica.raiz()
calculadoraCienfifica.valor()
let calBasica = new Calculadora();
calBasica.sumar();
calBasica.Resta()
calBasica.divicion()
calBasica.multiplicacion();

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
    calBasica.respuesta();
})

//limpiar pantalla
document.getElementById("Clear").addEventListener("click",function(){
    let miTexto = document.getElementById("Clear").value;
    let display = document.getElementById("display");
    document.getElementById("display").innerText = " ";
})




