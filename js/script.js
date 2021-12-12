/* Cadastro e exibição - Mateus Sousa */
let linha_selecionada = null;

function onFormSubmit(e){
    event.preventDefault();

    var dados_formulario = readFormData();

    if(linha_selecionada == null){
        insertNewRecord(dados_formulario);
    }else{
        updateRecord(dados_formulario);
    }
}

// Recuperar os dados
function readFormData(){
    var dados_formulario = {};
    dados_formulario["produto"] = document.getElementById("produto").value;
    dados_formulario["imagem"] = document.getElementById("imagem").value;
    dados_formulario["descricao"] = document.getElementById("descricao").value;
    
    return dados_formulario;
}

// Inserir dados
function insertNewRecord(data){
    var tabela = document.getElementById("lista-produto").getElementsByTagName('tbody')[0];
    var nova_linha = tabela.insertRow(tabela.length);

    var celula_01 = nova_linha.insertCell(0);
    celula_01.innerHTML = data.produto;

    var celula_02 = nova_linha.insertCell(1);
    celula_02.innerHTML = data.imagem;

    var celula_03 = nova_linha.insertCell(2);
    celula_03.innerHTML = data.descricao;

    var celula_04 = nova_linha.insertCell(3);
    celula_04.innerHTML = `
      <button class="btn btn-secondary m-1">editar</button>
      <button class="btn btn-danger m-1">excluir</button>
    `

}