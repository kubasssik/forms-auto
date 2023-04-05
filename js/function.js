//Валидация инпутов регулярное выражение, фокус и звездочка зеленеют
/*
export function validationInput(reg, input, cl1, cl2) {
    if (input.value.match(reg)) {
        input.classList.add(cl1)
        input.previousElementSibling.classList.add(cl2)
        input.nextElementSibling.textContent = ''
    }
    else {
        input.classList.remove(cl1)
        input.previousElementSibling.classList.remove(cl2)
        input.nextElementSibling.textContent = 'Заполняйте, как в СТС. Регистр текста не важен!'
    }

}
*/
export class  ValidationInput{
    constructor(reg, input, cl1, cl2){
        this.reg = reg;
        this.input = input;
        this.cl1 = cl1;
        this.cl2 = cl2;

    }
    validationInput() {
        if (this.input.value.match(this.reg)) {
            this.input.classList.add(this.cl1)
            this.input.previousElementSibling.classList.add(this.cl2)
            this.input.nextElementSibling.textContent = ''
        }
        else {
            this.input.classList.remove(this.cl1)
            this.input.previousElementSibling.classList.remove(this.cl2)
            this.input.nextElementSibling.textContent = 'Заполняйте, как в СТС. Регистр текста не важен!'
        }
    
    }
}
//Открывает инпут
 export class ParamsOpenInput {
    constructor(input, nextInput) {
        this.input = input;
        this.nextInput = nextInput;  
    }
    helpFunc() {
       
            if (this.input.value != '') {
                this.nextInput.classList.remove('display__none')
                this.input.classList.add('input__focus_green')
                this.input.previousElementSibling.classList.add('star__green')
            }
            else{
                this.nextInput.classList.add('display__none') 
                this.input.classList.remove('input__focus_green')
                this.input.previousElementSibling.classList.remove('star__green')
            }
                
                  
    }
}

