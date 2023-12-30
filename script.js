function buttonclick(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function deletebutton(){
    var str=document.getElementById("screen").value
    str=str.substr(0,str.length-1);
    document.getElementById("screen").value=str
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}