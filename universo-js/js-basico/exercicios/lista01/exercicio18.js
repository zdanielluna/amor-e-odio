let numero = Math.round(Math.random() * 10)
console.log(numero)

switch (numero) {
  case 0:
    return console.log('Zero')
  case 1:
    return console.log('Um')
    break
  case 2:
    return console.log('Dois')
    break
  case 3:
    return console.log('Três')
    break
  case 4:
    return console.log('Quatro')
    break
  case 5:
    return console.log('Cinco')
    break
  case 6:
    return console.log('Seis')
    break
  case 7:
    return console.log('Sete')
    break
  case 8:
    return console.log('Oito')
    break
  case 9:
    return console.log('Nove')
    break
  case 10:
    return console.log('Dez')
  default:
    return console.log('Número fora do intervalo')
}
