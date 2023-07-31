function Livro(nome) {
    this.nome = nome;
    console.log("Nome: " + this.nome);
    }

function Categoria1(nome, genero, preco) {
    Livro.call(this, nome);

    this.genero = genero;
        console.log("Genero: " + this.genero);
    
    let _preco = preco;

    this.getpreco = function() { 
        return _preco;
    }

    this.setpreco = function(valor) {   
        if (typeof valor === 'number') { 
            _preco = valor;
        }
    }

    this.promocao = function() { 
        const novopreco = _preco * 0.90; 
        _preco = novopreco; 
    }
}

function Categoria2(nome) {  
    Categoria1.call(this, nome, "Categoria 2", 80);

    this.promocao = function() {  
        const novopreco = this.getpreco() * 0.90; 
        this.setpreco(novopreco); 
    }
}

function Categoria3(nome) {
    Categoria1.call(this, nome, "Categoria 3", 120);

    this.promocao = function() { 
        const novopreco = this.getpreco() * 0.85;
        this.setpreco(novopreco);
    }
}

const categoria1 = new Categoria1("Código Dev", "Categoria 1", 60);
const categoria2 = new Categoria2("Como aprender JavaScript"); 
const categoria3 = new Categoria3("Dicas para ser um desenvolvedor Full Stack");
   

categoria1.promocao();
console.log("Livro: Código Dev - Novo valor com desconto: R$ " + categoria1.getpreco());

categoria2.promocao();
console.log("Livro: Como aprender JavaScript - Novo valor com desconto: R$ " + categoria2.getpreco());

categoria3.promocao();
console.log("Livro: Dicas para ser um desenvolvedor Full Stack - Novo valor com desconto: R$ " + categoria3.getpreco());