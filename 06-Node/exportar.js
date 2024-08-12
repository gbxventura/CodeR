console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

// Três formas de exportar algo por um módulo.
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
  nome: 'Teste',
};

console.log(module.exports);
// forma correta de exportar um modulo.
module.exports = { publico: true };
