const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Virdro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 19.99, fragil: false },
]

const caro = (e) => e.preco >= 500
const fragil = (e) => e.fragil
console.log(produtos.filter(caro).filter(fragil))
