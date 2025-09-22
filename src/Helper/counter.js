//funcion que realiza un countdown desde 5 a 0

export const counter = () => {
  let count = 5;
  const intervalo = setInterval(function () {
    console.log(count);
    count--;
    if (count < 0) {
      clearInterval(intervalo);
      console.log("¡Tiempo terminado!");
    }
  }, 1000);
};
