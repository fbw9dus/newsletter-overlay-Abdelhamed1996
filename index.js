const container = document.querySelector("#container")
const newsLetter = document.querySelector("#letter")
const btn = document.querySelector("#btn")
const h3 = document.querySelector("h3")
const closeBtn = document.querySelector("#closeBtn")
const email = document.querySelector("#input")
const boxLetter = document.querySelector("#boxLetter")

const newsLetterBestellen = (event)=>{
    event.preventDefault()
    container.style.display ="flex"
    

    const close = (event)=>{
        container.style.display= "none"

    }
    closeBtn.addEventListener("click", close)
    container.addEventListener("click",close)

    const bestellen = (event)=>{
        event.stopPropagation()
        email.style.display="none"
        h3.textContent= "Vielen Dank"
        btn.textContent="Schlieẞen"
        if(btn.textContent=="Schlieẞen"){
            const close2= (event)=>{
                container.style.display="none"
            }
            btn.addEventListener("click",close2)
        }
    }
    btn.addEventListener("click",bestellen)
    

}


newsLetter.addEventListener("click",function(){
    event.stopPropagation()
})

boxLetter.addEventListener("click",newsLetterBestellen)




