const init = () => {
  const inputForm = document.querySelector('form')
//   console.log(inputForm)
// let idInput  = inputForm[0];
let idInput = document.querySelector("input#searchByID");
console.log(idInput)
  inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e);
//    console.log(idInput.value)

    fetch(`http://localhost:3000/movies/${idInput.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        // console.log(data)
        const title =document.querySelector('#movieDetails h4');
        const summary = document.querySelector('#movieDetails p');

        title.textContent = data.title;
        summary.textContent= data.summary;
    })

  })
}

document.addEventListener('DOMContentLoaded', init);