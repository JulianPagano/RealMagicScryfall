function fillTextbox() {
  let textbox = document.querySelector("#q");
  if (textbox) {
    textbox.value = "-is:ub ";
  } else {
    setTimeout(fillTextbox, 500);
  }
}

fillTextbox();