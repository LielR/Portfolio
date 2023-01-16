console.log('Starting up')

$(function () {
  renderProjs()
})

function renderProjs() {
  var strHTML = gProjs.map(
    (project) =>
      `
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
    </a>
    <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
    </div>
  </div
    `
  )

  //var portContainer = $('.bg-light .container').children('.portrow')
  $('.bg-light .container').children('.portrow').html(strHTML)
}

function renderModal(id) {
  const project = gProjs.find((project) => project.id === id)

  var strHTML = `
    <h2>${project.title}</h2>
    <p class="item-intro text-muted">${project.name}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${
      project.id
    }.png" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${formatDate(project.createdAt)}</li>
    </ul>
    <a href="${
      project.url
    }" target="_blank"><button class="btn btn-danger" type="button">Check it out!</button></a>
    `

  var elModal = $('.modal-content .container .col-lg-8').children()
  elModal.html(strHTML)
}

$('.btn-default').click(function () {
  const subject = $('#subject').val()
  const body = $('#message').val()
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=lielr10@gmail.com&su=${subject}&b
    ody=${body}`
  window.open(url)
})
