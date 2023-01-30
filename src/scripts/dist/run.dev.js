"use strict";

var _Interfaces = _interopRequireDefault(require("./Interfaces"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fs = require('fs');

var axios = require('axios');

function lerArquivo(nomeArquivo) {
  return new Promise(function (resolve, reject) {
    fs.readFile(nomeArquivo, 'utf-8', function (erro, dados) {
      if (erro) {
        reject(erro);
        return;
      }

      try {
        var produtos = JSON.parse(dados);
        resolve(produtos);
      } catch (erro) {
        reject(erro);
      }
    });
  });
}

(function _callee() {
  var produtos, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, produto, resposta;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(lerArquivo('produtos.json'));

        case 3:
          produtos = _context.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 7;
          _iterator = produtos[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          produto = _step.value;
          _context.next = 13;
          return regeneratorRuntime.awrap(axios.post('https://crudcrud.com/api/produtos', produto));

        case 13:
          resposta = _context.sent;
          console.log(resposta.status);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 9;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          console.log('Dados transferidos com sucesso');
          _context.next = 38;
          break;

        case 35:
          _context.prev = 35;
          _context.t1 = _context["catch"](0);
          console.error(_context.t1);

        case 38:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 35], [7, 20, 24, 32], [25,, 27, 31]]);
})();