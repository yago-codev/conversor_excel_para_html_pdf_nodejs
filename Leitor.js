const fs = require('fs');
const util = require('util');

class Leitor {
  constructor() {
    this.leitor = util.promisify(fs.readFile);
    this.arquivo = './arquivo.csv';
  };

  async Ler(caminhoArquivo) {
    try {
      return await this.leitor(this.arquivo, 'utf-8');
    }
    catch(erro) {
      return undefined;
    };
  };
};

module.exports = Leitor;