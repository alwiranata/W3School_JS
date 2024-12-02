function handleClick(){
    const firstname = prompt("Masukkan firstName : ")
    const lastName = prompt("Masukkan lastName : ")
    let fullname = (firstname+ " " + lastName)
    return document.getElementById("demo").innerHTML = fullname
    
}