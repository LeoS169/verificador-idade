var verif_bot = window.document.querySelector('input#verif_bot') // alcança o botão Verificar
// Adição de eventos ao botão
verif_bot.addEventListener('click', Verificar) // não precisa do () pois acontece com um evento do usuário
verif_bot.addEventListener('mouseenter', Mouse_ent)
verif_bot.addEventListener('mouseout', Mouse_out)

function Mouse_ent() { // deixa botão verde ao passar por cima

    verif_bot.style.backgroundColor = '#90EE90'

}

function Mouse_out() { // retorna cor de botão

    verif_bot.style.backgroundColor = '#7e82f0'

}

function Verificar() { // Funcao para clique no botão verificar

    var anoNasc_txt = window.document.querySelector('input#ano_nasc') // Alcança input de ano de nascimento

    // Aloca dados do ano atual
    var agora = new Date()
    var ano_atual = agora.getFullYear()

    // Teste se valor de entrada é válido
    if (anoNasc_txt.value == '' || Number(anoNasc_txt.value) > ano_atual) {
        
        window.alert('Ponha uma idade válida, e tente novamente!')


    } else {

        var result = window.document.getElementById('result') //Alcança <p> do resultado
        var sex = window.document.getElementsByName('sex') //Alcança caixa de seleção do sexo

        var idade = ano_atual - Number(anoNasc_txt.value) //Calculo da idade

        //Adição de tag <img> no doc
        var img = document.createElement('img') // forma dinâmica de criação de elemento HTML
        img.setAttribute('id', 'img') // adição de atributo no elemento criado

        if (sex[0].checked) { // Homem

            if (idade <= 16) { // testes de idade

                result.innerHTML = `Você é uma criança com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/crianca.png')

            } else if (idade <= 25) {

                result.innerHTML = `Você é um jovem com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/jovem.png')

            } else if (idade <= 60) {

                result.innerHTML = `Você é um adulto com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/adulto.png')


            } else if (idade <= 110) {

                result.innerHTML = `Você é um idoso com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/idoso.png')


            } else {

                window.alert('Idade inválida!')

            }

        } else if (sex[1].checked) { // Mulher

            if (idade <= 16) { // testes de idade

                result.innerHTML = `Você é uma criança com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/crianca_mu.png') // troca a imagem da tag <img>


            } else if (idade <= 25) {

                result.innerHTML = `Você é uma jovem com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/jovem_mu.png')

            } else if (idade <= 60) {

                result.innerHTML = `Você é uma adulta com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/adulta.png')

            } else if (idade <= 110) {

                result.innerHTML = `Você é uma idosa com idade ${idade}.`
                result.style.textAlign = 'center'

                img.setAttribute('src', 'img/idosa.png')

            } else {

                window.alert('Idade inválida!')

            }
        

        } else { // Não selecionou

            window.alert('Selecione um sexo.')

        }
      
         result.appendChild(img) // Adiciona <img> à tag <p> de resultado  


    }
}