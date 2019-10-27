"use strict";

let writeUsButton = document.querySelector(".write-us-button");

let writeUsModal = document.querySelector(".modal-write-us");

let modalCloseButton = writeUsModal.querySelector(".modal-close-button");

modalCloseButton.addEventListener("click", function () {
  writeUsModal.classList.remove("show-modal");
})

writeUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add("show-modal");
  writeUsModal.querySelector("#write-us-name").focus();
});

