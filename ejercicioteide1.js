function calcularMCM(a, b, c, d) {
    // Calcula el MCD de dos números
    function calcularMCD(x, y) {
      if (y === 0) {
        return x;
      }
      return calcularMCD(y, x % y);
    }
  
    // Calcula el MCM de cuatro números
    const mcdAB = calcularMCD(a, b);
    const mcdCD = calcularMCD(c, d);
    const mcdABCD = calcularMCD(mcdAB, mcdCD);
  
    // Calcula el MCM utilizando la fórmula
    return (a * b * c * d) / mcdABCD;
  }
  
  const numero1 = 2;
  const numero2 = 3;
  const numero3 = 5;
  const numero4 = 10;
  
  const mcm = calcularMCM(numero1, numero2, numero3, numero4);
  console.log(`El MCM de ${numero1}, ${numero2}, ${numero3} y ${numero4} es: ${mcm}`);

  // Cálculo de grupos
const tamanoGrupo = 30; // Tamaño del grupo (MCM)
const numeroGrupos = 20; // Número de grupos

const numeroSoldados = tamanoGrupo * numeroGrupos;
console.log(`Hay ${numeroSoldados} soldados en el cuartel.`);

const grupos = Math.ceil(numeroSoldados / tamanoGrupo);
console.log(`Hay ${grupos} grupos de ${tamanoGrupo} soldados en el cuartel.`);

  





