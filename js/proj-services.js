'use strict'

var gProjs = createProjs()



function createProjs() {
    var projs = getFromStorage('projsDB')
    if(!projs){
        projs = [
            createProj('makerr','Makerr (Reference to Fiverr)'),
            createProj('appsus','Appsus Application'),
            createProj('memesgen','Memes Generator'),
            createProj('bookshop','Book Shop'),
            createProj('bootstrap','Bootsrap Project'),
            createProj('pacman','Pacman Project'),
            createProj('ballboard','Ballboard Project'),
            createProj('guesswho','Guess who Project'),
        ]
        saveOnStorage('projsDB',projs)
    }
    return projs
}


function createProj(name,title) {
    var projId = name.toLowerCase().replace(" ", "")
    return {
        id: projId,
        name: name,
        title: title,
        desc: makeLorem(),
        url: `https://LielR.github.io/${projId}/`,
        createdAt: Date.now()
    }
}