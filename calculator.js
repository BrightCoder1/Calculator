let OutputArea = document.getElementById("input")

const buttonsEl = document.querySelectorAll("button");
// console.log(buttonsEl)

for (let i = 0; i < buttonsEl.length; i++) {
        buttonsEl[i].addEventListener("click",()=>{
            const output=buttonsEl[i].innerHTML;
            if(output ==="c")
            {
                clearResult();
            }
            else if(output === "=")
            {
                calculateResult();
            }
            else{
                appendValue(output);
            }
        });
}
function clearResult(){
    OutputArea.value="";
}
