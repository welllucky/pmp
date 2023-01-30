import User from './Interfaces';

const fs = require('fs');
const axios = require('axios');

function lerArquivo(nomeArquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, 'utf-8', (erro, dados) => {
      if (erro) {
        reject(erro);
        return;
      }

      try {
        const produtos = JSON.parse(dados);
        resolve(produtos);
      } catch (erro) {
        reject(erro);
      }
    });
  });
}

(async function() {
  try {
    const produtos = await lerArquivo('produtos.json');

    for (const produto of produtos) {
      const resposta = await axios.post('https://crudcrud.com/api/produtos', produto);
      console.log(resposta.status);
    }

    console.log('Dados transferidos com sucesso');
  } catch (erro) {
    console.error(erro);
  }
})();
