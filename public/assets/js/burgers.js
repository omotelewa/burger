

$("#submit-btn").on("click", function (event) {

  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: {"burger_name": $("#burger-input").val().trim()}
  })
  .then(()=>location.reload())
})

$(".delete").on("click", function () {
  
  $.ajax({
    url: "/api/burgers/" + $(this).attr("data-id"),
    method: "DELETE"
  })
  .then(()=>location.reload())
})

$(".devour").on("click", function () {
  
  $.ajax({
    url: "/api/burgers/" + $(this).attr("data-id"),
    method: "PUT"
  })
  .then(()=>location.reload())
})
