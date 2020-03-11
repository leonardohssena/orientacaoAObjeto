//Crie uma classe contendo 3 propriedades com seus respectivos gets e sets e um método que multiplique as 3 retornando o produto.
//Deixe um exemplo de utilização da sua classe no final do código.

class Objeto {
  constructor(a, b, c) {
    this._a = a
    this._b = b
    this._c = c
  }
  
  //Getters
  get a() {
      return this._a
  }

  get b() {
    return this._b
  }

  get c() {
    return this._c
  }
  
  //Setters
  set a(a) {
    this._a = a
  }

  set b(b) {
    this._b = b
  }

  set c(c) {
    this._c = c
  }

  //Functions
  produto() {  
      return this._a * this._b * this._c
  }
}

//Exemplo
const objeto = new Objeto(1, 2, 3)

console.log(objeto.produto())