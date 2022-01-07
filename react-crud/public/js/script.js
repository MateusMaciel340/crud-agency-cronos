/* Cadastro e exibição - Mateus Sousa */
let linha_selecionada = null;

// eslint-disable-next-line no-unused-vars
function Crud(e){
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    var dados_formulario = ler_dados_formulario();

    if(linha_selecionada == null){
        inserir_novo_registro(dados_formulario);
    }else{
        atualizar_registro(dados_formulario);
    }
    resetar_formulario()
}

// Recuperar os dados
function ler_dados_formulario(){
    var dados_formulario = {};
    dados_formulario["produto"] = document.getElementById("produto").value;
    dados_formulario["imagem"] = document.getElementById("imagem").value;
    dados_formulario["descricao"] = document.getElementById("descricao").value;
    
    return dados_formulario;
}

// Inserir dados
function inserir_novo_registro(data){
    var tabela = document.getElementById("lista-produto").getElementsByTagName('tbody')[0];
    var nova_linha = tabela.insertRow(tabela.length);

    var celula_01 = nova_linha.insertCell(0);
    celula_01.innerHTML = data.produto;

    var celula_02 = nova_linha.insertCell(1);
    celula_02.innerHTML = `<img src="${data.imagem}">`;

    var celula_03 = nova_linha.insertCell(2);
    celula_03.innerHTML = data.descricao;

    var celula_04 = nova_linha.insertCell(3);
    celula_04.innerHTML = `
      <button class="btn btn-secondary m-1" onClick="Editar(this)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">editar</button>
      <button class="btn btn-danger m-1" id="botao-apagar" onClick="Apagar(this)">excluir</button>
    `
    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success alert-dismissible">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Enviado!</strong> Dados enviados com sucesso!
        </div>
    `;
}
function resetar_formulario() {
    document.getElementById("produto").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("botao-adicionar").disabled = true;
    linha_selecionada = null;
}

// Editar - Nícolas Nobre
// eslint-disable-next-line no-unused-vars
function Editar(table) {
    linha_selecionada = table.parentElement.parentElement;
    document.getElementById("produto").value = linha_selecionada.cells[0].innerHTML;
    document.getElementById("imagem").value = linha_selecionada.cells[1].querySelector('img').src;
    document.getElementById("descricao").value = linha_selecionada.cells[2].innerHTML;
}

function atualizar_registro(dados_formulario) {
    linha_selecionada.cells[0].innerHTML = dados_formulario.produto;
    linha_selecionada.cells[1].innerHTML = `<img src="${dados_formulario.imagem}">`;
    linha_selecionada.cells[2].innerHTML = dados_formulario.descricao;

    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success alert-dismissible">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Enviado!</strong> Dados enviados com sucesso!
        </div>
    `;
}
// Função Apagar
// eslint-disable-next-line no-unused-vars
function Apagar(td){
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Você deseja apagar esses dados?')){
        // eslint-disable-next-line no-undef
        row = td.parentElement.parentElement;
        // eslint-disable-next-line no-undef
        document.getElementById("lista-produto").deleteRow(row.rowIndex);
        resetar_formulario();

        document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-danger alert-dismissible">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Deletado!</strong> Dados deletados com sucesso!
        </div>
    `;
    }   
}