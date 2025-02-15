const btn = document.querySelector("#btn");
const main = document.querySelector("main");

let num = 0;
btn.addEventListener("click", clickHandler);

function clickHandler() {
  num += 1;
  console.log(num);
  const time = setInterval(() => {
    num = 0;
    console.log(num);
    clearTimeout(time);
  }, 3000);

  num >= 5 ? ((main.style.display = "flex"), (btn.style.display = "none")) : "";
}
