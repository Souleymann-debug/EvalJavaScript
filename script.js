
var btn_add = document.getElementById('btn-add')
var input = document.getElementById('add-message')
var mesrow = document.querySelectorAll('.row')
var span = document.getElementById('count')
var trash = document.querySelectorAll('img')


function compteur() {
    span.textContent = mesrow.length -2
    return
}
 

//Dès que la page s'ouvre, execution :
window.addEventListener("DOMContentLoaded", function (){
    compteur();
});


btn_add.addEventListener('click',function(){

    //Création de la div Row

    var row = document.createElement('div')
    row.className = 'row'
    document.body.appendChild(row)

    //Création de l'image de l'utilisateur
    var img = document.createElement('img')
    img.setAttribute('src','avatar-4.jpg')
    img.className = 'avatar'

    //Création de la poubelle
    var img_pou = document.createElement('img')
    img_pou.setAttribute('src','trash.png')
    img_pou.className = 'trash'

    //Création de la div : nom + paragraphe
    var nom_p = document.createElement('div')

    //Création du nom + paragraphe
    var h6 = document.createElement('h6')
    var p = document.createElement('p')

    //Remplie le nom et le paragraphe
    h6.textContent = "Souleymann BADRY"
    p.textContent = input.value

    //Affichage du nom et para...
    nom_p.appendChild(h6)
    nom_p.appendChild(p)

    //affichage de la div nom_p
    row.appendChild(img)
    row.appendChild(nom_p)
    row.appendChild(img_pou)

    //mise à jour du compteur
    document.getElementById('count').textContent=document.querySelectorAll('p').length

    input.value=""

})

for (var e of document.querySelectorAll('.trash')) {
    e.addEventListener('click',function(){
        this.parentNode.remove()
        document.getElementById('count').textContent=document.querySelectorAll('p').length
    })
    
}

