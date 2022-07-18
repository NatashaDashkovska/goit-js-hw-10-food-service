const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");

switchRef.addEventListener("change", changeTheme);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

let currentTheme = localStorage.getItem("Theme") || Theme.LIGHT;

if (!localStorage.getItem("Theme")) {
  console.log("no theme in local storage");
} else {
  switchRef.checked = currentTheme === "dark-theme" ? true : false;
  changeTheme();
}

function changeTheme(event) {
  if (switchRef.checked === true) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    currentTheme = Theme.DARK;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    currentTheme = Theme.LIGHT;
  }
  localStorage.setItem("Theme", currentTheme);
}
