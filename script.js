let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = string.replace(/x/g, "*");
      string = eval(string);
      string = string.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "M+") {
      string = Math.abs(eval(string));
      string = string.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = " ";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
