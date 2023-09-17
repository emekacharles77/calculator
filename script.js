var screen=document.getElementById("calculator_screen");
var button=document.querySelectorAll("#calculator_key");


screen.innerText=''

button.forEach(item=>{
    item.addEventListener("click", (number) => {
        switch(number.target.innerText){
            case "c":
                screen.innerText=""
                break;
                
                case "=":
                    try{
                        screen.innerText=eval(screen.innerText);
                    }catch{
                        screen.innerText="Error";
                    }
                    
                    break;

                    case "←":
                        screen.innerText=screen.innerText.slice(0, -1);
                        break;
                        
            default:
                screen.innerText+=number.target.innerText;
                break;
                
        }
    });
});










