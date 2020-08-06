// Procurar o botão
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {
    //Duplicar os campos
    // Duplicar os campos? quais campos?

     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false
     //limpar os campos. que campos?
      const fields = newFieldContainer.querySelectorAll('input')
     //para cada campo, limpar
     fields.forEach(function (field) {
         // pegar o field do momento e limpa ele
           field.value = ""
     })
    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
      
}

