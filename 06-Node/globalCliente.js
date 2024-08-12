require('./global');

console.log(MinhaApp.saudacao());

// Modificando objeto global
// Não está modificando pois foi usado Object.freeze ao exportar.
MinhaApp.nome = 'Eita!';
console.log(MinhaApp.nome);
