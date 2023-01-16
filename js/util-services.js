'use strict'

function saveOnStorage(key, val) {
    const value = JSON.stringify(val)
    localStorage.setItem(key, value)
}

function getFromStorage(key) {
    const storageKey = localStorage.getItem(key)
    const value = JSON.parse(storageKey)
    return value
}

function formatDate(timestamp) {

    const currentDate = new Date(timestamp);

    var dateTime =
        currentDate.getDate() + "/"
        + (currentDate.getMonth() + 1) + "/"
        + currentDate.getFullYear() + "  "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds();

    return dateTime
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}