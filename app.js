const quote = document.getElementById("quote");
const author = document.getElementById("author")
const generate_quote = document.getElementById("generate_quote")
const tweet_button=document.getElementById("tweet");






const api_url="https://api.quotable.io/random";
async function getquote(url){
    const response=await fetch(url);
    
    var data = await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api_url)
generate_quote.addEventListener("click",function(){
    getquote(api_url)
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"----by "+author.innerHTML,"tweet","width=600, height=300");

}
tweet_button.addEventListener("click",tweet);

