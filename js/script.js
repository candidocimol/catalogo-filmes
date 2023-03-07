let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");


btnBuscarFilme.onclick = () => {
  if(inputBuscarFilme.value.length > 0){
    fetch("")
  }
  return false;
}
/*
let ator = new Ator(1, "JOHN WAYNE");

console.log(ator);

let diretor = new Diretor(1, "Alfred Hitchcock");

console.log(diretor);

let genero = ['Ação', "Aventura", "Ficção cientifica"];

let direcao = [
  new Diretor(1, "Lana Wachowski"),
  new Diretor(2, "Lilly Wachowski")
];

let elenco =[
  new Ator(1, "Keanu Reeves"),
  new Ator(2, "Carrie-Anne Moss"),
  new Ator(3, "Laurence Fishburne"),
  new Ator(4, "Joe Pantoliano"),
  new Ator(5, "Hugo Weaving"),
  new Ator(6, "Antony Ray Parker"),
]

let sinopse = "Um jovem programador (Keanu Reeves) é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro.";

let cartaz= "https://media.fstatic.com/n4xnLDJoWW8Rcbrln2unFVEOYWU=/110x100/smart/filters:format(webp)/media/movies/covers/2011/06/bd3cef6e681142d110baaa646641b899.jpg";
  
let filme = new Filme(
  1,
  "Matrix",
  1999,
  genero,
  102,
  sinopse,
  cartaz,
  direcao,
  elenco,
  14,
  null
);



console.log(filme);
*/