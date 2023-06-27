function  requestListner(){
    console.log("Etat final de la requete ", this) // this c l'objet en cours
    let data = JSON.parse(this.responseText)
    let user = data.results[0]
    console.log("L'utilisateur recupere est: ", user)
}
    //Extraire les donnees demandees a partir du user
    let fname = user.name.first 
    let lname = user.name.last 
    let image = user.picture.large 

   /*
   
    console.log(fname) 
    console.log(lname)
    console.log(image)
*/
//Creaer les elements HTML dans le DOM
let li = document.createElement("li")
let img = document.createElement("img")
let p = document.createElement("p")

//Assovier du contenu aux elements crees
img.src = image
//p.innerHTML = fname + " "+lname
p.innerHTML = `${fname} ${lname}`

//Attacher tous ces elements HTML dans le DOM
document.getElementById("user").appendChild(li)
li.appendChild(img)
li.appendChild(p)


function gererError(){
    console.log("Quelque chose ne va pas bien dans ton code")
}
// creer des variables pour URL et methode HTTP
let url = "https://randomuser.me/api"
let method = "GET"
// nouvelle instance de l"objet HMLHTPRequest
let XHR = new XMLHttpRequest()

console.log("Etat initial de la requete ", XHR)

//var xhr = new XMLHttpRequest();

//Ouvrir la connexion
XHR.open(method, url)

//creer une methode qui va gerer la reponse
XHR.onload = requestListner
XHR.onerror = gererError 
XHR.send()
