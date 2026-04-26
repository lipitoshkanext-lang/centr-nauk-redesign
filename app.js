document.querySelectorAll(".lead-form").forEach((form) => {
  const success = document.createElement("p");
  success.className = "form-success";
  success.textContent = form.dataset.success || "Заявка сохранена в демо-версии.";
  form.appendChild(success);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    success.classList.add("is-visible");
  });
});
