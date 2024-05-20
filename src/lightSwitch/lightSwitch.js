import "./lightSwitch.css";

const toggleSwitch = document.querySelector('input[name="color-scheme"]');

const enableDark = () => {
  document.body.classList.toggle("dark", true);
  toggleSwitch.checked = true;
};
const enableLight = () => {
  document.body.classList.toggle("dark", false);
  toggleSwitch.checked = false;
};

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  enableDark();
} else {
  enableLight();
}

toggleSwitch.addEventListener("change", function (e) {
  if (e.target.checked) {
    enableDark();
  } else {
    enableLight();
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    if (newColorScheme == "dark") {
      enableDark();
    } else {
      enableLight();
    }
  });
