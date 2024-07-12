function calcularMCM(a, b, c, d) {
    function calcularMCD(x, y) {
      return y === 0 ? x : calcularMCD(y, x % y);
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
  const limiteSuperior = 570; //limite de soldados ya que es menor de 600
  
  // Calculo de grupos
  const grupos = Math.ceil(limiteSuperior / tamanoGrupo);
  console.log(`Hay ${grupos} grupos de ${tamanoGrupo} soldados en el cuartel.`);

 


  