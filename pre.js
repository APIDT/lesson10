const prompt = require('prompt-sync')();
const fs = require('fs')

const persons = {
    name: '',
    biryhdate: '',
    phonenumber: '',
    email: '',
}

let newName = prompt('Введіть ім\'я: ')
persons.name = newName    
let NewBirthdate = prompt("Введіть свою дату народження : ")    
persons.biryhdate = NewBirthdate
let NewPhone = prompt('Введіть ваш номер телефону: ')
persons.email = NewPhone
let NewEmail = prompt('Введіть вашу емаїл: ')
persons.email = NewEmail

let chooseAct
do{
     chooseAct = prompt('додати елемент 1, видилити 2, змінити 3, зберегти 4, вийти 5: ')    
    switch(chooseAct){
        case "1" :
            let addelem = prompt('Введіть назва елемента: ')
            if ( !isNaN(addelem) ){
                console.log ("уведіть коректну назву)))")
            }
            else {
                let newAddedValue = prompt('Введіть значення: ')
                persons[addelem] =  newAddedValue
            };
        break
        case "2" :  
        let del = prompt('Введіть назва елемента: ')
        if ( !isNaN(del) ){
            console.log ("уведіть коректну назву)))")
        }
        else{
        delete persons[del]
        }
        break 
        case "3" :
            let currentElem = prompt('виберіть назву елемента: ')
            if ( !isNaN(currentElem) ){
                console.log ("уведіть коректну назву)))")
            }
            else{
           let currentnewValue = prompt('Введіть нове значення: ')
            persons[currentElem] =  currentnewValue
            }
            break
        case "4" : fs.writeFileSync("person.txt", JSON.stringify(persons))
        break 
        
    }
       console.log(persons)
}while(chooseAct !== '5')
 





fs.writeFileSync("person.txt", JSON.stringify(persons))
const read = fs.readFileSync(`D:\\Users10\\w\\Desktop\\GG\\person.txt`)
const textParsed = JSON.parse(read)
console.log(textParsed)