var database = require("../database/config")



function street(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():",nome);
    var instrucao2 = `
        INSERT INTO modalidade (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function vert(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function vert():",nome);
    var instrucao3 = `
        INSERT INTO modalidade (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}


function bowl(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function bowl():",nome);
    var instrucao4 = `
        INSERT INTO modalidade (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}


function freestyle(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function freestyle():",nome);
    var instrucao5 = `
        INSERT INTO modalidade (nome) VALUE ('${nome}');   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao5);
    return database.executar(instrucao5);
}



function downhill() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function downhill()");
    var instrucao6 = `
    INSERT INTO modalidade (nome) VALUE ('${nome}');   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao6);
    return database.executar(instrucao6);
}

function pegar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao6 = `
    select count(nome) as 'nome' from modalidade group by nome order by nome desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao6);
    return database.executar(instrucao6);
}



module.exports = {
  street,
  vert,
  bowl,
  freestyle,
  downhill,
    pegar,
   

};