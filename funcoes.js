//dois modos de como criar uma função

//1
function numeroAleatorio()
{
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

//2
const olaMundo = () => 
{
    console.log("ola mundo");
    
}

olaMundo();


//concatenar console.log
function soma(numero1, numero2)
{
    return numero1 + numero2;
}

const primeiraSoma = soma(1,3);
const segundaSoma = soma(6,7);

console.log({
    primeiraSoma,
    segundaSoma
});