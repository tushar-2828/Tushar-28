let display = document.getElementById('inputBox');
let btns = document.querySelectorAll("button");

let string = '';
let buttonsArray = Array.from(btns);

buttonsArray.forEach(btns => {
    btns.addEventListener("click", (e) => {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
        





















// login page // 

// function checkLogin() {

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var errordiv = document.getElementById("error")

//     if (username === "" || password === "") {
//         errordiv.textContent = "file the information"
//         return
//     }
    
//      if (username === "tushar" && password ==="1234") {
//        alert(`welcome to my aceept`)
//        document.write(username)
//     }
//     else{
//         errordiv.textContent = "cheak the username and pass  "
//     }
// }
