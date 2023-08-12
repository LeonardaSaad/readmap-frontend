//! GET
// var xhr = new XMLHttpRequest();

// var documento;

// xhr.responseType = "json"
// xhr.onreadystatechange = () => {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//       documento = xhr.response;
//       console.log(documento);
//    } else {
   
//    }
// }

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1")

// xhr.send()

//! POST
var xhr = new XMLHttpRequest();
var documento = {
   "userId": 200,
   "id": 12,
   "title": "Notícia exclusiva",
   "body": "Desenvolvedor larga blá blá blá."
}

xhr.onreadystatechange = () => {
   if(xhr.readyState == 4) {
      console.log(xhr)
   }
}


xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")

xhr.send(documento)