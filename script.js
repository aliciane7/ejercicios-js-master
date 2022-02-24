const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

//EJERCICIO1
const primo= num=>{
    for(let i=2;i<num; i++){
        if(num%i==0)return false
    }
    return true
}
ejercicio1.forEach(num=>{console.log(`¿Es ${num} un numero primo?`, primo(num))})

//EJERCICIO2
const admitirPaso =(ejercicio2)=>{
  if (ejercicio2.edad>=18 && ejercicio2.esFamiliar==true){
      console.log(`Puedes pasar ${ejercicio2.nombre} ${ejercicio2.edad}`);
  }else{
      console.log(`No puedes pasar ${ejercicio2.nombre} ${ejercicio2.edad}`);
  }
}
ejercicio2.forEach(ejercicio2=>{admitirPaso(ejercicio2)})

//EJERCIO3
function fibonacci(numero)
    {
        let numeros=[0,1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }

    console.log(fibonacci(50));