let nomes = ["Guilherme", 'João', 'Vitor'];

let containerNome = document.querySelector(".nomes");

nomes.map((item) => {
   containerNome.innerHTML+=item;
   containerNome.innerHTML+='<hr>';
})



