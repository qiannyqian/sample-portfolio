$(document).ready(function() {
  console.log("hi i'm here")
})


$(document).ready(function() {
  $('#salmon-btn').on('click', function() {
    $('body').css('background-color', '#ff6666')
  })

  $('#teal-btn').on('click', function() {
    $('body').css('background-color', '#00ffcc')
  })

  $('#sunshine-btn').on('click', function() {
    $('body').css('background-color', '#ffcc00')
  })
})
