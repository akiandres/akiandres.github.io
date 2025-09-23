




const sumar=(a,b) => a+b;
const restar=(a,b) => a-b;
const multiplicar=(a,b) => a*b;
const dividir = (a,b) => a/b;
const resto = (a,b) => a%b;
const exponencial = (a,b) => a**b;


const final = document.getElementById("resultado")
const op=document.getElementById("operacion")


const btnSuma=document.getElementById("opsuma");
btnSuma.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=sumar(primer,segundo);
    op.textContent="+";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})

const btnResta=document.getElementById("opresta");
btnResta.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=restar(primer,segundo);
    op.textContent="-";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})

const btnMultiplicar=document.getElementById("opmultiplicacion");
btnMultiplicar.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=multiplicar(primer,segundo);
    op.textContent="*";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})

const btnDividir=document.getElementById("opdivision");
btnDividir.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=dividir(primer,segundo);
    op.textContent="/";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})

const btnResto=document.getElementById("opresto");
btnResto.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=resto(primer,segundo);
    op.textContent="%";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})

const btnExponencial=document.getElementById("oppotencia");
btnExponencial.addEventListener('click', ()=>{
    event.preventDefault();
    let primer = parseFloat(document.getElementById("fnumber").value);
    let segundo = parseFloat(document.getElementById("snumber").value);
    let resultado=exponencial(primer,segundo);
    op.textContent="^";
    final.textContent=isNaN(resultado) ? "Error" : resultado;
})