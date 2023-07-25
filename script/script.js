function menu(){
    if (document.getElementById('itens').style.display == 'block'){
        document.getElementById('itens').style.display = 'none'
    } else {
        document.getElementById('itens').style.display = 'block'
    }
}

function tamanho() {
    if (window.innerWidth >= 768) {
      itens.style.display = 'block'
    } else {
      itens.style.display = 'none'
    }
  }
  