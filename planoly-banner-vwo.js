document.addEventListener("DOMContentLoaded", (event) => {
  const circles = document.querySelectorAll(".js-circle")

  if (circles.length > 0) {
    for (const item of circles) {
      item.classList.add("is-Active")
    }
  }
})
