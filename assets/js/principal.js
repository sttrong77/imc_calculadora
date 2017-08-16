var pessoas = document.querySelectorAll(".pessoa");
for(var i = 0; i < pessoas.length; i++){
    var pessoa = pessoas[i];
        //Captura peso
    var tdPeso = pessoa.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    //Captura Altura
    var tdAltura = pessoa.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    //Captura IMC
    var tdImc = pessoa.querySelector(".info-imc");
    console.log(tdImc);
    //Calcula IMC
    var imc = peso / (altura * altura);
    console.log("IMC = " + imc);
    tdImc.textContent = imc;
}




