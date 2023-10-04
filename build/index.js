"use strict";
class Churrascometro {
    constructor() {
        this.nameField = document.getElementById("inputNome");
        this.emailField = document.getElementById("inputEmail");
        this.cepField = document.getElementById("inputCep");
        this.promocionalCheckBox = document.getElementById("inputPromocional");
        this.checkboxSetChecked();
        this.saveFields();
    }
    checkboxSetChecked() {
        this.promocionalCheckBox.setAttribute("checked", "checked");
    }
    saveFields() {
        console.log(this.nameField);
        this.nameField.value = "123";
    }
}
let ChurrascometroObj = new Churrascometro();
