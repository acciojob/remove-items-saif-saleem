let btn = document.getElementsByTagName("input")[0]; // Get the first input element
let clrsl = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
  let cv = clrsl.querySelector("option");
  if (cv) {
    cv.remove();
  }
});
