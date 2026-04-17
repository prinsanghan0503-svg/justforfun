// HEART CURSOR
document.addEventListener("mousemove", function(e) {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 1s linear";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

// BACKGROUND PARTICLES
for (let i = 0; i < 25; i++) {
  let p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(p);
}