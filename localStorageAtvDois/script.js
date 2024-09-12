function armazenar() {

    const mensagem = document.getElementById('mensagem').value
    localStorage.setItem('Mensagem', mensagem)

    console.log('Sua mensagem foi armazenada!')

}