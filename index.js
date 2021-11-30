fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => {
   
    const container = document.querySelector(".container")
   
    for(let i = 0; i < data.results.length; i++){
        let div = document.createElement("div")
    div.innerHTML = `<img src='${data.results[i].picture.large}' />`
    container.appendChild(div)
    }
    // backgroundImage=URL("https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg")
})
.catch(err => console.error(err))