function fillTextbox() {
  let textbox = document.querySelector("#q");
  if (textbox) {
    textbox.value = "-is:ub ";
    textbox.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    setTimeout(fillTextbox, 500);
  }
}

fillTextbox();