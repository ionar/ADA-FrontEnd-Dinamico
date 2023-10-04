class Churrascometro {
    // Escutar click do botao
    // Salvar os campos preenchidos no localStorage
    // Avancar para a proxima tela

    // Localizando os campos
    nameField: HTMLInputElement = document.getElementById("inputNome") as HTMLInputElement;
    emailField: HTMLInputElement = document.getElementById("inputEmail") as HTMLInputElement;
    cepField: HTMLInputElement = document.getElementById("inputCep") as HTMLInputElement;
    promocionalCheckBox: HTMLElement = document.getElementById("inputPromocional");

    constructor() {
        this.checkboxSetChecked();
        this.saveFields();
    }

    checkboxSetChecked() {
        // Metodo para marcar o checkbox de consentimento.
        this.promocionalCheckBox.setAttribute("checked", "checked");
        //console.log(checkBoxPromocional);
    }

    saveFields() {
        console.log(this.nameField);
        this.nameField.value = "123";
    }
}

let ChurrascometroObj = new Churrascometro();