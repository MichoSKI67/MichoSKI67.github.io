
/*

function Salvar(){

    const turma = prompt("Turma: ");
    const periodo = prompt("Periodo: ");
    const nomeAluno = prompt("Nome aluno: ");
    const txtnota1 = prompt("Nota 1Bim: ");
    const txtnota2 = prompt("Nota 2Bim: ");

    let nota1 = Number(txtnota1);
    let nota2 = Number(txtnota2);

    const media = (nota1+nota2)/2;

    let aluno = {

        "turma" : turma,
        "periodo" : periodo,
        "nome" : nomeAluno,
        "nota1Bim": Number(nota1),
        "nota2Bim": Number(nota2),
        "media": media,
        "aprovado": true

    }

console.log(aluno);
console.log(typeof(aluno));

}


function CarregarAlunos(){

    axios.get('/JS/alunos.json')

    .then(function (response) {  // manipula o sucesso da requisição

    console.log(response); //Responsa completa
    console.log(response.data); // Apenas os dados

    for (let i = 0; i < response.data.length; i++) {
      const aluno = response.data[i];
      console.log(aluno.nome);
      
    }

  })

  .catch(function (error) { // manipula erros da requisição
    console.error(error);
  })

  .finally(function () { // sempre será executado
  });

}

*/




function BuscarCEP(){

  const htmlcep = document.querySelector("#txtcep");
  var cep = Number(htmlcep.value)

  axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
  .then(function (response) {
    const data = response.data;
    console.log(data);

    document.getElementById(`txtRua`).value = data.street || ``;
    document.getElementById(`txtBairro`).value = data.neighborhood || ``;
    document.getElementById(`txtCidade`).value = data.city || ``;
    document.getElementById(`txtUF`).value = data.state || ``;

    document.getElementById(`txtRua`).disabled = false;
    document.getElementById(`txtNumero`).disabled = false;
    document.getElementById(`txtBairro`).disabled = false;
    document.getElementById(`txtCidade`).disabled = false;
    document.getElementById(`txtUF`).disabled = false;


  })

  .catch(function (error) {
    console.error(error);

  })



}




