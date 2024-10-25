const box = document.querySelector(".container")
const img = document.querySelectorAll(".container img")

const imgWidth = 144
    let contador = 0 
const slider =()=>{
    contador++
    if(contador > img.length -1){
        contador = 0;
    }
box.style.transform = `translateX(${-contador * imgWidth }px)`

}

setInterval(slider, 6000);