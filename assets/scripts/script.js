document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    scroll();
  });
});

function scroll() {
  setTimeout(function () {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth < 800) {
      window.scrollTo({ top: y - 200, behavior: "smooth" });
    } else {
      window.scrollTo({ top: y - 100, behavior: "smooth" });
    }
  }, 500);
}

function hideShow() {
  let elements = document.querySelectorAll(".list-menu");
  // using forEach loop
  elements.forEach((element) => {
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

document.querySelectorAll(".more").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.id.substring(el.id.length - 1);
    showDetail(id);
  });
});

function showDetail(number) {
  const second = "a" + number;
  const more = "more" + number;
  const el = document.getElementById(second);
  if (el.classList.contains("second")) {
    el.classList.remove("second");
    document.getElementById(more).innerText = "Sembunyikan...";
  } else {
    el.classList.add("second");
    document.getElementById(more).innerText = "Selengkapnya...";
  }
}
