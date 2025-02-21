const btnA = document.querySelector('button')
const carta = document.querySelector('.borda')
const divLer = document.querySelector('.btn-ler')
const texto = document.querySelector('.txt')
const corpo = document.querySelector('body')

btnA.addEventListener('click', ()=>{
    divLer.style.display = 'none' 
    const nome = prompt('Antes de tudo, Qual é o seu primeiro nome?')
    if(nome != 'Ludmila' && nome != 'ludmila' && nome != 'Ludmila ' && nome != 'ludmila ' && nome != 'ludy' && nome != 'Ludy ' && nome != 'Ludy ' && nome != 'lufreddy' && nome != 'Lufreddy' && nome != 'Lufredyy ' && nome != 'lufreddy' && nome != 'lufreddy ' && nome != 'ludy '){
        alert(`Infelizmente você não terá acesso a este conteudo ${nome}!`)
        corpo.style.background = 'black'
        carta.style.display = 'block'
        texto.innerHTML = '<br><h1>[Erro]:</h1><br><p>Infelizmente você não tem permissão para ver este conteúdo!</p>'
    }else{
        alert(`Estavamos esperando você ${nome}!`)
        const pin = prompt(`Esta parte do site foi criada especialmente pensando em você ${nome}, porém, para termos a certeza deque é mesmo você, porfavor digite o codigo_r4:`)
        if(pin != 199123){
            alert('Você errou o pin...')
            corpo.style.background = 'black'
            carta.style.display = 'block'
            texto.innerHTML = '<br><h1>[Erro]:</h1><br><p>Infelizmente você não tem permissão para ver este conteúdo!</p>'
        }else{
            alert('Agora sim... Seja bem-vinda meu Amor❤, te amo muito gata!!')
            carta.style.display = 'block'
        }
    }
    
})