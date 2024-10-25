const box = document.querySelector(".container")
const img = document.querySelectorAll(".container img")

const active = document.querySelector('.infoOne')
const elementh2 = document.querySelector('.info expandir')


elementh2.addEventListener('click', ()=>{
    elementh2.classList.toggle('active')
})
    let contador = 0 
const slider =()=>{
    contador++
    if(contador > img.length -1){
        contador =0;
    }
box.style.transform = `translateX(${-contador * 466}px)`

}

setInterval(slider, 2000);