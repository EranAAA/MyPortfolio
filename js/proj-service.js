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
        _createProject('Minesweeper', 'Minesweeper', 'Sprint 1', 'The old-Update Minesweeper', 'https://eranaaa.github.io/MineSweeper/', ['Matrixes', 'keyboard events']),
        _createProject('BookShop', 'Books Shop', 'Exercise', 'better then monday.com', 'https://eranaaa.github.io/BookShop/', ['Matrixes', 'keyboard events'])
    ]
}

function getProjects() {
    return gProjs
}

