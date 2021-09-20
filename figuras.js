//  Codigo del Cuadrado  //
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();

//  Codigo del Triangulo //

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//  Codigo del Circulo //
console.group("Circulos");
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio ** 2) * PI;
}
console.groupEnd();

function PCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetroCuadrado);
}

function ACuadrado() {
    const input = document.getElementById("InputCuadrado");
    const resultCuad = document.getElementById("resultCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    resultCuad.innerText = "El Area es: " + area + "cm2";
}


function calcularPerimetroTriangulo() {
    const InputBase = document.getElementById("InputBase");
    const Input1 = document.getElementById("Input1");
    const Input2 = document.getElementById("Input2");
    const resultTriangulo = document.getElementById("pResult");
    const bs = parseInt(InputBase.value);
    const a = parseInt(Input1.value);
    const b = parseInt(Input2.value);
    const perimetro = perimetroTriangulo(a,b,bs);
    resultTriangulo.innerText = "El perímetro es: " + perimetro + "cm";
}

function calcularAreaTriangulo() {
    const InputBase = document.getElementById("InputBase");
    const InputAlt = document.getElementById("InputAlt");
    const resultTriangulo = document.getElementById("aResult");
    const bs = parseInt(InputBase.value);
    const h = parseInt(InputAlt.value);
    const area = areaTriangulo(bs, h);
    const value = input.value;

    const area = areaTriangulo(value);
    resultTriangulo.innerText = area + " cm";
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const result = document.getElementById("resultCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    result.innerText = "El perímetro es: " + perimetro + "cm";
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const result = document.getElementById("resultCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    result.innerText = "El Area es: " + area + "cm2";
}