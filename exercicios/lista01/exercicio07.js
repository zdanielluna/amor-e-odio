let bhaskara = (ax2, bx, c) => {
  let resultados = []
  let delta = bx ** 2 - 4 * ax2 * c

  if (delta < 0) {
    return 'Delta é negativo'
  }
  let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
  let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
  resultados = [x1, x2]

  return resultados
}

console.log(bhaskara(2, -9, 7))
