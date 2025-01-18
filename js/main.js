function toggleModal() {
  const modal = document.getElementById("modal");

  console.log(modal.classList);

  if (modal.classList.contains("hideModal")) {
    modal.classList.add("showModal");
    modal.classList.remove("hideModal");
  } else if (modal.classList.contains("showModal")) {
    modal.classList.add("hideModal");
    modal.classList.remove("showModal");
  }
}

const cadastrarNovoCasoButton = document.getElementById("registerNewCaseBtn");
const backToHomeDiv = document.getElementById("backToHome");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

cadastrarNovoCasoButton.addEventListener("click", toggleModal);
backToHomeDiv.addEventListener("click", toggleModal);
cancelBtn.addEventListener("click", toggleModal);
submitBtn.addEventListener("click", toggleModal);

console.log(document.querySelectorAll("div"));
