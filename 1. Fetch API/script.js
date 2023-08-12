const key = document.getElementById("key")
const title = document.getElementById("title")

fetch("https://jsonplaceholder.typicode.com/todos/1 ")
	.then(response => response.json())
	.then(json => {
		key.innerHTML = json.id
		title.innerHTML = json.title
	})


// const data = {
// 	id: "andrerafa",
// 	nome: "Andre",
// 	email: "andrerafa@origamid.com",
// 	senha: "123456",
// 	cep: "123456",
// 	rua: "Ali Perto",
// 	numero: "230",
// 	bairro: "Botafogo",
// 	cidade: "Rio de Janeiro",
// 	estado: "Rio de Janeiro"
// };

// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
// 	method: "POST",
// 	mode: "cors",
// 	cache: "no-cache",
// 	credentials: "same-origin",
// 	headers: {
// 		"Content-Type": "application/json"
// 	},
// 	redirect: "follow",
// 	referrer: "no-referrer",
// 	body: JSON.stringify(data)
// });