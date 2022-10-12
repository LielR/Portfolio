'use strict'

var gProjs = createProjs()



function createProjs() {
    var projs = getFromStorage('projsDB')
    if(!projs){
        projs = [
            createProj('Mine sweeper','Minesweeper Sprint 1'),
            createProj('Book Shop','Book Shop'),
            createProj('Bootstrap','Bootsrap Project'),
            createProj('Pacman','Pacman Project'),
            createProj('Ballboard','Ballboard Project'),
            createProj('Guess who','Guess who Project'),
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