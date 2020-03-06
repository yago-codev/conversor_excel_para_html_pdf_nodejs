class Processador {
  static ProcessarDados(dados) {
    let array_dados = dados.split('\r\n');
    let linhas = [];

    array_dados.forEach(elemento => {
      let dados_processados = elemento.split(',');
      linhas.push(dados_processados);
    });

    return linhas;
  };
};

module.exports = Processador;