console.log('Starting up')

function initPage() {
    renderProjects()
    //renderProjectsModals()
}

function renderProjects() {
    var projects = getProjects()
    var elProject = getSelector('.render-projects')
    //debugger
    var strHTML = projects.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="renderProjectsModals('${project.id}')" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid mx-auto d-block" src="img/portfolio/${project.id}2.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
    </div> ` )

    elProject.innerHTML = strHTML.join('')
}

function renderProjectsModals(id) {
    //debugger
    var projects = getProjects()
    var elProject = getSelector('.modal-body')
    //debugger
    var findIdx = projects.findIndex(project => project.id === id)
    var strHTML = `
        <h2>${projects[findIdx].name}</h2>
        <p class="item-intro text-muted">${projects[findIdx].title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/${projects[findIdx].id}Large.png" alt="">
        <p>${projects[findIdx].desc}</p>
        <ul class="list-inline">
          <li>${projects[findIdx].publishedAt}</li>
          <li>Client: ${projects[findIdx].name}</li>
          <li>Category: ${projects[findIdx].title}</li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
          Close Project</button>`

    elProject.innerHTML = strHTML

    hideCanvas()
}

function getSelector(selector) {
    return document.querySelector(selector)
}

function sendEmail() {

    var message = document.getElementById("message").value
    var subject = document.getElementById("subject").value
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    if (!email) return
    //debugger
    //window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&[su=${subject}&body=${message}`
    //window.location.href = `https://mail.google.com/mail/u/0/?to=${email}&su=${subject}&body=${message}&fs=1&tf=cm`

    window.open(
        `https://mail.google.com/mail/u/0/?to=${email}&su=${subject}&body=${message}&fs=1&tf=cm`,
        '_blank' // <- This is what makes it open in a new window.
    );

    document.querySelector('.offcanvas-aside').classList.remove('offcanvas-aside-open');
}
