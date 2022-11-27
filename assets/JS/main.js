function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBt();
        },

        clickBt() {
            document.addEventListener('click', (e) => {
                const elem = e.target;

                if (elem.classList.contains('bt-num')) {
                    this.addBtParaDisplay(elem.innerText);
                }
                if (elem.classList.contains('bt-clear')) {
                    this.clearDisplay();
                }
                if (elem.classList.contains('bt-del')) {
                    this.delUmNum();
                }
                if (elem.classList.contains('bt-res')) {
                    this.realizaOp();
                }
            });
        },

        addBtParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        delUmNum() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaOp() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (conta == 0) {
                    this.display.value = conta;
                    return;
                }

                if (!conta) {
                    alert('Conta error, operção invalida');
                    this.clearDisplay();
                    return;
                }

                this.display.value = conta;


            } catch (e) {
                alert('Conta error, operção invalida');
            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();