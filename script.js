let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let passwordBox = document.getElementById("passwordBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gnBtn = document.getElementById("gnBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = slider.value;
slider.addEventListener("input" , () => {
    sliderValue.textContent = slider.value;
});

gnBtn.addEventListener("click", () => {
    passwordBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~`!@#$%^&*()_-=+{}[]|><,:;";

function generatePassword(){
    let genPass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    
    if(allChars == "" || allChars.length == 0){
        return genPass;
    }


    let i = 1;
    while(i <= slider.value){
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPass;
}

copyIcon.addEventListener("click" , () => {
    if(passwordBox.value != "" || passwordBox.value.length >= 4)
    {
        navigator.clipboard.writeText(passwordBox.value);
        copyIcon.innerText= "check";
        copyIcon.title = "Password Copied!";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy";
            copyIcon.title = "";
        }, 3000);
    }
});