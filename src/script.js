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

const videoHeadings = Array.from(
  document.getElementsByClassName("dropdown-button")
);

videoHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    const videoEl = Array.from(heading.parentElement.children).find((el) =>
      el.classList.contains("dropdown")
    );

    const svgIcon = heading.querySelector("svg");

    videoEl.classList.toggle("hidden");
    svgIcon.classList.toggle("rotate-180");
  });
});
