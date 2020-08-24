// function doAction(xml, input, family, friends, waitPlace, waitBody) {
//     if(xml.readyState < 4) {
//         waitPlace.innerHTML = waitBody
//     }
//     if (xml.readyState == 4) {
//         waitPlace.innerHTML = ''
//         let data = JSON.parse(xml.responseText)
//         let foundfFamily = data.family.filter(member => member.age == input || member.name == input)
//         if (foundfFamily.length !== 0) {
//             foundfFamily.forEach(member => {
//                 family.innerHTML += `<p>name: ${member.name}, age: ${member.age}</h4>`
//             })
//         } else {
//             family.innerHTML += `<p>There is nothig found !!</h4>`
//         }
        
//         let foundFriends = data.friends.filter(member => member.age == input || member.name == input)
//         if (foundFriends.length !== 0) {
//             foundFriends.forEach(member => {
//                 friends.innerHTML += `<p>name: ${member.name}, age: ${member.age}</h4>`
//             })
//         } else {
//             friends.innerHTML += `<p>There is nothig found !!</h4>`
//         }
//     }
// }

// function creatRequest() {
//     let family = document.querySelector('.family')
//     let waitPlace = document.querySelector('.waiting')
//     let friends = document.querySelector('.friends')
//     let input = document.querySelector('input').value
//     let img = '<img src="wait-2.gif" style="width:100px;height:100px;display:block">'
//     let xml;
//     family.innerHTML = ''
//     friends.innerHTML = ''
//     try {
//         if (window.XMLHttpRequest) xml = new XMLHttpRequest()
//         else xml = new ActiveXObject("Microsoft.XMLHTTP")
//     } catch(error) {
//         waitPlace.textContent = "Sorry, your browser does not support fetching data."
//         throw new Error(error.description)
//     }
//     xml.onreadystatechange = () => doAction(xml, input, family, friends, waitPlace, img)
//     return xml
// }

// function info() {
//     let xml = creatRequest()
//     xml.open('get', "http://127.0.0.1:5500/data.json")
//     xml.send()
// }

// let getBottun = document.querySelector('.btnsearch')
// getBottun.addEventListener('click', () => info())



// function infoAjax (page) {
//     let xml;
//     if (window.XMLHttpRequest) xml = new XMLHttpRequest() 
//     else xml = new ActiveXObject("Microsoft.XMLHTTP")
//     xml.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let body = document.querySelector('.ajax')
//             body.innerHTML = this.responseText
//         }
//     }
//     xml.open('get', `http://127.0.0.1:5500/${page}`)
//     xml.send()
// }

// let getBtn = document.querySelector('.btn')
// let getBtn2 = document.querySelector('.btn2')
// getBtn.addEventListener('click', () => infoAjax("info.html"))
// getBtn2.addEventListener('click', () => infoAjax("info2.html"))

// let swapBtn = document.querySelector('.swap')
// swapBtn.addEventListener('click',
// () => window.location.pathname = "/info.html")


let photoInput = document.getElementById('image-file')
// let XMLHTTP = new XMLHttpRequest()
// let formData = new FormData()
// formData.append("photo", photo)
// XMLHTTP.open("POST", "/upload/images")
// XMLHTTP.send(formData)
function savePhoto() {
    let user = {name: "Amir", age: 24}
    let photo = document.getElementById('image-file').files[0]
    let XMLHTTP = new XMLHttpRequest()
    let formData = new FormData()
    // formData.append("photo", photo)
    formData.append("user", JSON.stringify(user))
    XMLHTTP.onreadystatechange = () => console.log(XMLHTTP)
    XMLHTTP.open("POST", "http://127.0.0.1:5500/data.json")
    XMLHTTP.setRequestHeader("Content-Type", "multipart/form-data")
    XMLHTTP.send(formData)
}

photoInput.onchange = () => savePhoto()