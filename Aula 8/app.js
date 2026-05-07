function textoTela(id, texto){
    let campo = document.getElementById(id)
    campo.innerHTML = texto
}

textoTela("h1","Site Funcional")
textoTela("p","Uma página para praticar containers e box model")
textoTela("p2", "Essa página foi criada para entender como os elementos se organizam visualmente usando CSS.")
