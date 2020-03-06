const Leitor = require('./Leitor');
const Processador = require('./Processador');

const teste_leitura = new Leitor();

const arquivo = './arquivo.csv';

async function main() {
  const dados = await teste_leitura.Ler(arquivo);

  Processador.ProcessarDados(dados);
};

main();