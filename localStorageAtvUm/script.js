function armazenar() {

    const numero = document.getElementById('numero').value
    localStorage.setItem('Numero', numero)

    console.log('Seu número foi armazenado!')

}