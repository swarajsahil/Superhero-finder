const container=document.getElementById("container");
const show=document.getElementById("show");
const btn=document.getElementById("btn");
const input=document.getElementById("input");
btn.addEventListener("click",()=>{
    fetch(`https://www.superheroapi.com/api.php/1967521380248335/search/${input.value}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        // console.log(data.results[2].image.url);
        let link;
        if(data.results[0].image.url!=undefined){
            link=data.results[0].image.url;
        }else if(data.results[1].image.url){
            link=data.results[1].image.url;
        }else{
            link=data.results[2].image.url;
        }
        // console.log(link);
        let html=`
        <img src="${link}" alt="photo">
        <h1>${input.value}</h1>
        <p>Publisher : ${data.results[0].biography.publisher}</p>
        <p>First-appearance : ${data.results[0].biography["first-appearance"]}</p>`;
        show.innerHTML=html;
        input.value="";
    })
})