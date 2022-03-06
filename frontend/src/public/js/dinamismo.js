const subir = document.getElementById("subir")
    subir.addEventListener('click',() =>{
        window.scrollTo(0,0)
    })

    window.onscroll = ()=>{
        if(window.scrollY < 400){
            subir.classList.remove("subir-on");
        } else {
            subir.classList.add("subir-on");
        }
    }

    const nav = document.getElementsByClassName("text-a");
    
    function seleccionado(){
    for (let i = 0 ; i < nav.length; i++) {
        if(nav[i].classList.contains("select")){
            nav[i].classList.remove("select");
        } else{
            nav[i].addEventListener('click' , ()=>{
                nav[i].classList.add("select")
            });
        }
    }
}

seleccionado();


function dropdown(){
    let click = document.querySelector('.btn-filtro');
    let list = document.querySelector('.list');
    
    click.addEventListener("click",()=>{
        list.classList.toggle('newlist');
    });
}

dropdown();

