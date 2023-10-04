class Churrascometro {
    // Escutar click do botao
    // Salvar os campos preenchidos no localStorage
    // Avancar para a proxima tela

    constructor() {
        this.checkboxSetChecked();
    }

    checkboxSetChecked() {
        // Metodo para marcar o checkbox de consentimento.
        let checkBoxPromocional = document.getElementById("inputPromocional");
        checkBoxPromocional.setAttribute("checked", "checked");
        //console.log(checkBoxPromocional);
    }
}

let ChurrascometroObj = new Churrascometro();