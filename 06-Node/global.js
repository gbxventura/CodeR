// console.log(global);
// Não poderá modificar pois foi usado
// Object.freeze ao exportar.

globalThis.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos lugares!';
  },
  nome: 'Sistema Legal',
});
