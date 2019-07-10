let x = [2,4,6,8,10];
//llamar a la función
//f(x);
//console.log("El resultado es "+f(x))
console.table(f(x));
//declaro mi función 
function f(x){
    let resultado = {
        "x" : x,
        "y" : []
    };
    for(let i=0; i < x.length; i++){
        //resultado.x.unshift(x[i]);
        resultado.y.push(5*(x[i]) + 2)
        //y = 5*(x[i]) + 2;
        //y.push(5*(x[i]) + 2);
        //console.log(`Cuando "x" vale ${x[i]} "y" vale ${y}`)
    }
    return resultado
}