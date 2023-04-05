import { ValidationInput, ParamsOpenInput } from "./function.js"

const $inputs = document.querySelectorAll('.main__form_input-style')
const $loading = document.querySelector('.loading')




//Получаю JSON с авто
let dataPrice

     fetch('https://cars-base.ru/api/cars?full=1')
        .then(data => { return data.json() })
        .then(data => { dataPrice = data })
        .then(formsOnlineGrade)
        .then( $loading.style.opacity = '0')
        .then(setTimeout(loadingHidden, 1000))
       
        .catch(error => console.log(error))


function loadingHidden() {
    $loading.classList.add('display__none');   
}


function formsOnlineGrade() {
    
// 1. Проверка VIN кода
$inputs[0].addEventListener('input', examVINcode)
function examVINcode() {
    let validationRegexp = new ValidationInput(
        /\b[A-HJ-NPR-Z0-9]{11}[0-9]{6}\b/i,
        this,
        'input__focus_green',
        'star__green'
    );
    validationRegexp.validationInput();
}

// 2. Проверка гос номера
$inputs[1].addEventListener('input', validationNUMauto)
function validationNUMauto() {
    let validationRegexp = new ValidationInput(
        /([АВЕКМНОРСТУХ]{1}[0-9]{3}[АВЕКМНОРСТУХ]{2}[0-9]{2,3})/i,
        this,
        'input__focus_green',
        'star__green',
    );
    validationRegexp.validationInput();
}


// 3.Заполняю Селект. Марки авто.Автоматически
function addOption() {
    dataPrice.forEach(e => {
        $inputs[2].append(new Option(`${e.name} (${e['cyrillic-name']})`))   
    })
    
}
addOption()

//let help = new HelpCloud(this, this.parentElement.nextElementSibling);
//help.helpFunc();

// Открываю инпут c моделями
$inputs[2].addEventListener('input', openInput)
function openInput() {
    let openInput = new ParamsOpenInput(this, this.parentElement.nextElementSibling);
    openInput.helpFunc();
    let addSelectInput = new AddModelOption(this, this.parentElement.nextElementSibling);
    addSelectInput.addModelOption();
     //addModelOption(this, this.parentElement.nextElementSibling)
  }
 
}




// 4. Заполняем Модели, перед этим очищаем, каждый раз, когда меняем Марку авто
//$inputs[2].addEventListener('input', addModelOption)
class AddModelOption {
    constructor(input, nextInput){
      this.input = input;
      this.nextInput = nextInput;
    }
    addModelOption() {
        console.log( this.nextInput.children[1].children.length);
      
            console.log('ok');
            for (let i = 0; i < this.nextInput.children[1].children.length; i++) {
                const e = this.nextInput.children[1].children[i];
                if(i == 0) continue 
               
                console.log(e);
            

        }
        let m = []
        for (let i = 0; i < dataPrice.length; i++) {
            const e = dataPrice[i];
            if ( this.input.value == `${e.name} (${e['cyrillic-name']})`) {
                m.push(e.models)
                console.log(m[0]);
            }
        }
       
        for (let i = 0; i < m[0].length; i++) {
            const el = m[0][i];
           // console.log(el.name);
           // console.log(this.nextInput.children[1]);
           
            this.nextInput.children[1].append(new Option(el.name))
        }
    }
}











