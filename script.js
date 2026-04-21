const message = `Hey… wait ❤️

I know this whole thing was a bit fun and tricky 😅  
But now, I want to be completely real with you.

Sorry if this felt like I forced the moment… that was never my intention.

So let me ask you properly this time—

Do you genuinely feel the same way?

You can say YES or NO.  
Whatever your answer is, I will accept it with full respect.

Just honesty 💫`;

function startSerious() {
  const fun = document.getElementById("fun");
  const fade = document.getElementById("fade");
  const text = document.getElementById("text");
  const music = document.getElementById("music");

  // 🛑 SAFETY CHECK (THIS FIXES YOUR BUG)
  if (!fun || !fade || !text) return;

  fun.style.display = "none";
  fade.style.opacity = 1;

  text.innerHTML = "";

  setTimeout(() => {
    text.style.opacity = 1;
    typeText(message, text, 28);
    if (music) music.play();
  }, 1200);
}

function typeText(msg, el, speed) {
  let i = 0;

  function typing() {
    if (i < msg.length) {
      el.innerHTML += msg.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      const btns = document.getElementById("buttons");
      if (btns) btns.style.opacity = 1;
    }
  }

  typing();
}

function yesClick() {
  window.location.href = "yes2.html";
}

function noClick() {
  window.location.href = "noFinal.html";
}