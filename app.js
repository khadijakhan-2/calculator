function getnumber(num){
    
var result = document.getElementById("result");
result.value +=  num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value="";
}



function getresult(){
    var result = document.getElementById("result");
    result.value=eval(result.value);    
}

function cube(){
    var result = document.getElementById("result");
var x = result.value;
result.value = x*x*x;
}

function square(){
    var result = document.getElementById("result");
var x = result.value;
result.value = x*x;
}

function sqr(){
var result = document.getElementById("result");
result.value = Math.sqrt(result.value);
}

function del(){
    var result = document.getElementById("result");
    result.value = result.value.substr(0,result.value.length-1);
}

function per(){
    var result = document.getElementById("result");
    result.value = (result.value / 100) + "%" ;
}


function co(){
    var result = document.getElementById("result");
    result.value = Math.cos(result.value);
}

function si(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);
}

function ta(){
    var result = document.getElementById("result");
    result.value = Math.tan(result.value);
}

function ac(){

  document.getElementById("result").disabled = false;

}