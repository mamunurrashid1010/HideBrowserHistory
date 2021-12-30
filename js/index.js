
document.getElementById("nameInput").addEventListener("keyup",changeName);

function changeName(){
    const getvalue= document.getElementById("nameInput").value;
    document.getElementById("name").innerHTML=getvalue.toUpperCase();
}