function playVideo(videoEl) {
  videoEl.muted = true;
  videoEl.play();
}

const videoInvito = document.getElementById("video-invito");

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting && videoInvito.currentTime === 0)
    playVideo(videoInvito);
};
const obsOptions = {
  root: null,
  threshold: 1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(videoInvito);

const dropdownButtons = Array.from(
  document.getElementsByClassName("dropdown-button")
);

dropdownButtons.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", () => {
    const dropdownEl = Array.from(dropdownBtn.parentElement.children).find(
      (el) => el.classList.contains("dropdown-element")
    );

    const svgIcon = dropdownBtn.querySelector("svg");

    dropdownEl.classList.toggle("hidden");
    svgIcon.classList.toggle("rotate-180");
  });
});

const dropdownArrow = document.getElementById("dropdown-arrow");
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("hidden");
  const isMenuEnabled = !Array.from(menu.classList).includes("hidden");

  if (!isMenuEnabled) {
    dropdownArrow.classList.remove("dropdown-arrow-menu-enabled");
    dropdownArrow.classList.add("dropdown-arrow-menu-disabled");
  } else {
    dropdownArrow.classList.remove("dropdown-arrow-menu-disabled");
    dropdownArrow.classList.add("dropdown-arrow-menu-enabled");
  }
}

dropdownArrow.addEventListener("click", toggleMenu);
