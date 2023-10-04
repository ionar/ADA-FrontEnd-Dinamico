"use strict";
class Churrascometro {
    constructor() {
        this.checkboxSetChecked();
    }
    checkboxSetChecked() {
        let checkBoxPromocional = document.getElementById("inputPromocional");
        checkBoxPromocional.setAttribute("checked", "checked");
    }
}
let ChurrascometroObj = new Churrascometro();
