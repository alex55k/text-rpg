let textarea = "";
let input = "";
function setElem(textareaid, inputid){
  if(textareaid == null || textareaid == ""){
    console.error("setElem() occured an error. Missing: textareaid argument.", (new Error().stack.split("at ")[1]).trim());
  } else {
    if(document.getElementById(textareaid)){
      textarea = document.getElementById(textareaid);
    }else{
    console.error("setElem() occured an error. Element with the id '" + textareaid + "' was not found.", (new Error().stack.split("at ")[1]).trim())
    }
  }
  if(inputid == null || inputid == ""){
    console.error("setElem() occured an error. Missing: inputid argument.", (new Error().stack.split("at ")[1]).trim());
  } else {
    if(document.getElementById(inputid)){
      textarea = document.getElementById(inputid);
    }else{
    console.error("setElem() occured an error. Element with the id '" + inputid + "' was not found.", (new Error().stack.split("at ")[1]).trim())
    }
  }
}

let chat = "";
const line = (n) => '='.repeat(n);
const gen = (t) => `${line(t.length)}\n${t}\n${line(t.length)}`;

const clear = (el) => {
  el.value = '';
};
