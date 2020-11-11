var input = document.querySelector("#input")
var saveBtn = $(".saveBtn")

$(".saveBtn").on("click", function() {
    event.preventDefault()
    localStorage.setItem("task", JSON.stringify(input));
  });
