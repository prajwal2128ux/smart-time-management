let time = 25 * 60;
let interval;

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    time--;
    updateUI();

    if (time === 0) {
      alert("Focus session complete!");
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 25 * 60;
  updateUI();
}

function updateUI() {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  document.getElementById("time").innerText =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
