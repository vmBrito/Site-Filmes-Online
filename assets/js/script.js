/* para declarar uma variavel usamos o let mas tambem tem o const
que no caso é uma constante que nao consegue mudar o seu valor, o seu
primeiro valor não pode ser mudado*/

//SELECIONANDO A LISTA (UL) DO MEU HTML
const listaFilme = document.querySelector(".filmes")

//FUNÇÃO QUE VAI LISTAR OS FILMES
//Na outra pagina temos um array que é uma coleção de dados
//serve para executar determinado trabalho e o dessa vai ser listar os filmes já definidos 
//no outro arquivo(script.js)

//console.log(filme.categoria) = mostra na tela a categoria expecificada no vetor
 //vamos usar essa função para listar alguma determinada instrução
function listarFilmes(colecaoFilmes){
    //LIMPAR VITRINE HTML
    listaFilme.innerHTML = ""

    //1 ACESSAR OS FILMES
    //2 LOOP PARA ENCONTRAR OS FILMES
    //3 MONTAR UM TEMPLATE (LI)
    //4 MOSTRAR NA TELA

    //os filmes ja temos
    //filmes = array de filmes ["filme 1, filme 2, filme 3"]
    
    //e para fazer o loop usamos o foreach que faz um loop atras de uma função
    //criamos uma função sem nome dentro do foreach
    // o foreach vai por meio do loop navegar dentro de "filmes"
    //depois de navegar ele vai perguntar, oq é para fazer com esses filmes?

    //ACESSANDO A COLEÇÃO DE FILMES(ARRAY) E PASSANDO PARA A FUNÇÃO TEMPLATE
    colecaoFilmes.forEach(function(filme){
        //cada filme que o foreach encontrar ele vai executar essa função

        //PASSANDO CADA UM DOS FILMES => PARA CRIAR O TEMPLATE PARA CADA FILME
        const template = criarTemplate(filme)
        //vai retornar os filmes separadamente

        //ADICIONANDO O FILME DE FORMA VISUAL NO HTML
        listaFilme.appendChild(template)
    })
}
//a vantagem das funções é separar as coisas por responsabilidade
// eu nao quero q a minha função de listar filmes tambem seja responsavel pelo template
listarFilmes(filmes)

//  fUNÇÃO QUE CRIA O TEMPLATE(LI)
function criarTemplate(filme){
    //1
        //NOME
        //IMAGEM
    //2- CRIAR UM LI
    //3 RETORNAR ESSE TEMPLATE COM O FILME

    //CRIANDO UM TEMPLATE DO TIPO HTML
    const li = document.createElement("li")

    //ADICIONANDO UMA ESTRURURA HTML PARA DENTRO DO (li)
    li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}">
        </figure>
        <h2>${filme.nome}</h2>
    `
    return li
}

//FILTRA FILME POR CATIGORIA
function filtrarFilme(filtroCategoria){
    //LOOP PARA FILTRAR OS FILMES
    //o filter serve como um loop, mas filtrando
    const filmesFiltrados = filmes.filter(function(filme){

        //SE A CATEGORIA BUSCADA FOR === A DO FILME ATUAL MOSTRE O FILME
        if(filtroCategoria == filme.categoria){
            //RETORNE O FILME
            return filme
        }
    })

    //EXPLICANDO A FUNÇÃO ACIMA::
    //A FUNÇÃO FILTRAR FILMES PRECISA RECEBER UM PARAMETRO OU CATEGORIA COMO COMEDIA OU TERROR
    // E AÍ DECLARAMOS UMA VARIAVEL QUE VAI RECEBER ESSES FILMES FILTRADOS ENTAO
    //OS FILMES QUE ELE ENCONTRAR ELE VAI RECEBER E GUARDAR DENTRO
    //AI EU PEGO FILMES QUE NO CASO SÃO TODOS E PEDE PARA O FILTER PERCORRER ELE
    //FILTER = PASSE POR TODOS OS FILMES PARA MIM E PARA CADA FILME EXECUTE ESSA FUNÇÃO
    //PEGA A CATEGORIA QUE O USUARIO PASSOU E VERIFICA E SE A CATEGORIA QUE O USUARIO PASSOU
    //FOR IGUAL A CATEGORIA DO FILME ENTAO EU QUERO QUE VOCE RETORNE ESSE FILME
    // SE ENCONTRAR DE COMEDIA RETORNE ESSE FILME PARA EU MOSTRAR PARA O USUARIO
    //E ENTAO GUARDE DENTRO DE filmesFiltrados
    //apartir disso so preciso chamar a função listar filmes
    //olha, achei esses filmes aq e preciso que voce mostre para o usuario
    
    listarFilmes(filmesFiltrados)

    //e apos fazer isso a função listar filmes precisa receber um parametro no inicio e fim
    // e sempre limpar a minha vitrine na hora de adicionar um filme novo
}
//SELECIONANDO MENU
const categorias = document.querySelector(".categorias")
//ADICIONANDO UM INTERCEPTADOR DE EVENTO
categorias.addEventListener("click",function(event){
    //CANCELAR EVENTO DO LINK = NAO RECARREGAR A TELA
    event.preventDefault()

    //PEGAR ONDE FOI CLICADO
    //pegou e selecionou os textinhos
    const categoriaSelecionada = event.target.text
    if(categoriaSelecionada == "Mostrar todos"){
        listarFilmes(filmes)
        //Se a escolha do usuario foi mostar todos mostre a lista de filmes completa
    }else{
        filtrarFilme(categoriaSelecionada)
    }
})
//serve para colocar um interseptador(adione um render evento) click é evento
//puxar a tela é um evento e por aí vai, mexer o mouse é um evento
//quando clicar execute uma função que tem um event dentro
//o event vem exatamente de onde vem o clik, ele consegue rastrear
//quando você tenta fazer isso o site recarrega a tela por conta de ser um link e voce acaba
//perdendo os dados, só que isso nao pode acontecer
//e para fazer isso colocamos event.preventdefalt() para cancelar o carregamento