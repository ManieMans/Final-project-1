const quote = document.querySelector(".quote");
 generete = document.getElementById("generate");
 const social = document.getElementById("social");

 window.addEventListener("load",()=>{
    generateQuote();
 })
function generateQuote(){
    let div = document.createElement("div");
    quote.innerHTML = 'Loading New quote...'
    generate.innerHTML = "Generating..."
    fetch("https://api.api-ninjas.com/v1/quotes",{
        headers:{"X-Api-Key":"oQ9TVVXBn3ak4lmOImzCYg==mNjP5tOUzK11KjR4"}
    }).then((response)=>response.json()).then((data)=>{
        console.log(data);
        generate.innerHTML = "New Quote";
        
        quote.innerHTML = "";
        quote.innerHTML+=data[0].quote;


    })
    

}

generateQuote();

function tweeet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world", "Tweet window", "width=600", "height=300");
}




