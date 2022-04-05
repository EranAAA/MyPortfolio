'use strict'

var gProjs;

_createProjects()

function _createProject(id, name, title, desc, url, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt: (new Date()).toLocaleString('en-GB'),
        labels: []
    }
}

function _createProjects() {
    gProjs = [
        _createProject('MineSweeper', 'Minesweeper', 'Sprint 1', 'The old-Update Minesweeper', 'https://eranaaa.github.io/MineSweeper/', ['Matrixes', 'keyboard events']),
        _createProject('BookShop', 'Books Shop', 'Exercise', 'better then nothing', 'https://eranaaa.github.io/BookShop/', ['Matrixes', 'keyboard events']),
        _createProject('PacMan', 'PacMan', 'Exercise', 'check in Google', 'https://eranaaa.github.io/PacMAn/', ['Matrixes', 'keyboard events']),
        _createProject('BallBoard', 'Ball Board', 'Exercise', 'check in Google', 'https://eranaaa.github.io/ballBoard/', ['Matrixes', 'keyboard events']),
        _createProject('TouchTheNums', 'Touch The Nums', 'Exercise', 'check in Google', 'https://eranaaa.github.io/TouchTheNums/', ['Matrixes', 'keyboard events'])
    ]
}

function getProjects() {
    return gProjs
}

