// задача 4
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "1234") ok();
//     else fail();
//    }
   
//    let user = {
//     name: 'Вася',
   
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
   
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
   
//    };
   
//    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//    задача 5

//    function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "1234") ok();
//     else fail();
//    }
   
//    let user = {
//     name: 'John',
   
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//    };
// askPassword(user.login.bind(user, true), user.login.bind(user, false))

// задача 6
 
const elem = {value: "Привет"}

function func(surname, name) {
alert(`${this.value}, ${surname}, ${name}`);
}

func.call(elem, "Петров", "Петр");
func.call(elem, "Иванов", "Иван");




