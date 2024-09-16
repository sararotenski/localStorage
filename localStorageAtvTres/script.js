function salvar() {

    let marca = document.getElementById('marca').value
    let modelo = document.getElementById('modelo').value

    const carro = {

        marca: marca,
        modelo: modelo

    }

    localStorage.setItem('carros', JSON.stringify(carro))

    console.log(carro)

}