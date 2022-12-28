const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    let toggler = document.querySelector(".navbar__toggler");
    toggler.classList.toggle("fa-bars");
    toggler.classList.toggle("fa-times");
  });
});
