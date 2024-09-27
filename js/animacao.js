document
.getElementById("appointmentForm")
.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const haircut = document.getElementById("haircut").value;
  const haircutPrice = document.getElementById("haircutPrice").innerText; // Corrigido para usar innerText

  const appointmentInfo = {
    name: name,
    date: date,
    time: time,
    haircut: haircut,
    haircutPrice: haircutPrice,
  };

  // Formatação da mensagem para o WhatsApp
  const message = `*Novo Agendamento!*%0A*Nome:* ${name}%0A*Data:* ${date}%0A*Hora:* ${time}%0A*Corte escolhido:* ${haircut}%0A*Preço do corte:* ${haircutPrice}`;

  const phoneNumber = "5553999996551"; // Insira o número de telefone do proprietário com código de país

  // Envia diretamente para o WhatsApp do proprietário com a mensagem formatada
  window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  // Alerta de sucesso para o usuário
  alert(
    "Agendamento realizado com sucesso! O proprietário será notificado no WhatsApp."
  );
});

document.getElementById("haircut").addEventListener("change", function () {
const selectedOption = this.options[this.selectedIndex];
const price = selectedOption.getAttribute("data-price");

if (price) {
  document.getElementById("haircutPrice").innerText = `R$ ${price},00`;
} else {
  document.getElementById("haircutPrice").innerText =
    "Selecione um corte para ver o preço";
}
});
const burgerMenu = document.getElementById("burgerMenu");
const menuContent = document.getElementById("menuContent");
const closeMenu = document.getElementById("closeMenu");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const profileName = document.getElementById("profileName");

burgerMenu.addEventListener("click", () => {
  menuContent.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuContent.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  const username = prompt("Digite seu nome de usuário:");
  if (username) {
    profileName.textContent = username;
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
  }
});

registerBtn.addEventListener("click", () => {
  const newUsername = prompt("Escolha um nome de usuário:");
  if (newUsername) {
    const password = prompt("Escolha uma senha:");
    if (password) {
      alert("Registro bem-sucedido!");
      profileName.textContent = newUsername;
      loginBtn.style.display = "none";
      registerBtn.style.display = "none";
    }
  }
});