

$("#submit-btn").on("click", function (event) {
  event.preventDefault();
  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: {"burger": $("#burger-input").val().trim()}
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
