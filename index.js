let darkMode = false;
document.querySelector(".mode").onclick = function () {
  let r = document.querySelector(":root");


  if (darkMode) {
    darkMode = false;
  } else {
    darkMode = true;
  }

  if (darkMode) {
    r.style.setProperty("--elements", "hsl(209, 23%, 22%)");
    r.style.setProperty("--background", "hsl(207, 26%, 17%)");
    r.style.setProperty("--input", "hsl(0, 0%, 100%)");
    r.style.setProperty("--text", "hsl(0, 0%, 100%)");
  } else {
    r.style.setProperty("--elements", "hsl(0, 0%, 100%)");
    r.style.setProperty("--background", "hsl(0, 0%, 98%)");
    r.style.setProperty("--input", "hsl(0, 0%, 52%)");
    r.style.setProperty("--text", "hsl(200, 15%, 8%)");
  }
};