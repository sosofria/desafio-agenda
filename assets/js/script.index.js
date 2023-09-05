function verificarInput(){
    let Nome = document.getElementById("nome").value;
    let Telefone = document.getElementById("telefone").value;
    let Celular = document.getElementById("celular").value;
    let Fotinha = document.getElementById("fotinha").value;
    let Data = document.getElementById("data").value;
    let Email = document.getElementById("email").value;
    let Cep = document.getElementById("cep").value;
    let Cidade = document.getElementById("cidade").value;
    let Insta = document.getElementById("insta").value;
    let Git = document.getElementById("git").value;

    if(Nome == '' || Telefone== '' || Celular == '' || Fotinha == '' || Data == '' || Email == '' || Cep == '' || Cidade == '' || Insta == '' || Git == ''){
        mensagem("Preecha todos os dados", "erro");
        return true;
    } else{
        return false
    }
}

function mensagem(msg, tipo){
    let Msg = document.getElementById("msg");
    Msg.innerHTML = "";

    let msgTela = `
    <p class='${tipo}'>${msg}</p>
    `
    Msg.innerHTML += msgTela;

    setTimeout(function(){
        Msg.innerHTML = "";
    }, 3000);
}

class Cadastro{
    constructor(nome, telefone, celular, fotinha, data, email, cep, cidade, insta, git){
        this.nome = nome;
        this.telefone = telefone;
        this.celular = celular;
        this.fotinha = fotinha;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git
        this.idade = this.calcularIdade();
        this.zodiacSign = this.getZodiacSign();
        this.id = Math.floor(Math.random() * 9999);
    }
    
    calcularIdade() {
        let hoje = new Date();
        let data = new Date(this.data);
        let idade = hoje.getFullYear() - data.getFullYear();
        let mes = hoje.getMonth() - data.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
            idade--;
        }
        return idade;
    }

    getZodiacSign() {
        let data = new Date(this.data);
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        
        if ((mes == 1 && dia <= 20) || (mes == 12 && dia >= 22)) {
            return "Capricórnio ♑";
        } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
            return "Aquário ♒";
        } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
            return "Peixes ♓";
        } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
            return "Áries ♈";
        } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
            return "Touro ♉";
        } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
            return "Gêmeos ♊";
        } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
            return "Câncer ♋";
        } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
            return "Leão ♌";
        } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
            return "Virgem ♍";
        } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
            return "Libra ♎";
        } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
            return "Escorpião ♏";
        } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
            return "Sagitário ♐";
        }
           
}
}

class listaAgenda{
    constructor(){
        this.AgendaArray = [];
    }

    add(parametro){
        if(verificarInput()){
            mensagem("ainda há campos em branco", "erro");
        }else{
            if(!isURLValida(parametro.fotinha)) {
                console.log(parametro.fotinha);
                mensagem("imagem inválida", "erro")
            } else {
                this.AgendaArray.push(parametro);
                limparInputs();
                mensagem("adicionado com sucesso!", "sucesso")
            }
        }

        
}
    criarID(id){
        return this.AgendaArray.find(contato => contato.id === id)
    }
}

const cadastro = new listaAgenda();

function limparInputs(){
    document.getElementById("nome").value = '';
    document.getElementById("telefone").value = '';
    document.getElementById("celular").value = '';
    document.getElementById("fotinha").value = '';
    document.getElementById("data").value = '';
    document.getElementById("email").value = '';
    document.getElementById("cep").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("insta").value = '';
    document.getElementById("git").value = '';
}

function criarCadastro(){
    let Nome = document.getElementById("nome").value;
    let Telefone = document.getElementById("telefone").value;
    let Celular = document.getElementById("celular").value;
    let Fotinha = document.getElementById("fotinha").value;
    let Data = document.getElementById("data").value;
    let Email = document.getElementById("email").value;
    let Cep = document.getElementById("cep").value;
    let Cidade = document.getElementById("cidade").value;
    let Insta = document.getElementById("insta").value;
    let Git = document.getElementById("git").value;

    const createCadastro = new Cadastro(Nome, Telefone, Celular, Fotinha, Data, Email, Cep, Cidade, Insta, Git);

    cadastro.add(createCadastro);
    showCadastroo();
}

function formatedCellphone(Telefone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = Telefone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatedCellphone(Celular) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = Celular.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function isURLValida(url) {
    console.log(url);
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function dateinPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function showCadastroo(){
    const registerHTML = document.getElementById('CadastroLista');
    registerHTML.innerHTML = '';

    let array = cadastro.AgendaArray;

    array.forEach(contato => {

        const createCtt = `
        
        <div class= 'ctt' onclick="showContato(${contato.id})" >
            <img src= "${contato.fotinha}" >
            <p><strong>${contato.nome}</strong></p>
            <p> Telefone Fixo: ${formatedCellphone(contato.telefone)}</p>
            <p> Telefone Celular: ${formatedCellphone(contato.celular)}</p>
            </div>`;

            registerHTML.innerHTML += createCtt;

    });

}

function showContato(id){
    const contato = cadastro.criarID(id)
    const registerHTML = document.getElementById('contatoLista');
    let createCtt = '';
 createCtt = `
        
        <div class= 'ctt1'>
            <img src= "${contato.fotinha}" >
            <p><strong>${contato.nome}</strong></p>
            <p> Id: ${contato.id}</p>
            <p> Telefone Celular: ${formatedCellphone(contato.celular)}</p>
            <p> Telefone Fixo: ${formatedCellphone(contato.telefone)}</p>
            <p> Data de Nascimento: ${dateinPTBR(contato.data)}</p>
            <p> Idade: ${contato.idade}</p>
            <p> Signo: ${contato.zodiacSign}</p>
            <p> Email: ${contato.email}</p>
            <p> CEP: ${contato.cep}</p>
            <p> Cidade: ${contato.cidade}</p>
            <p> Instagram: ${contato.insta}</p>
            <p> Gihub: ${contato.git}</p>
            </div>`;

    registerHTML.innerHTML = createCtt;
        
}