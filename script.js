
function dialogWithUser() {
  let times = parseInt(prompt("Скільки разів ви подорожували Україною?"));
  for (let i = 1; i <= times; i++) {
    alert("Подорож №" + i + " — це завжди новий досвід!");
  }
}

function showDeveloperInfo(surname, name, position = "студент") {
  const info = `Розробник: ${surname} ${name}, Посада: ${position}`;
  document.getElementById("developer-info").textContent = info;
}


function compareStrings(str1, str2) {
  if (str1 > str2) {
    alert("Більший рядок: " + str1);
  } else if (str2 > str1) {
    alert("Більший рядок: " + str2);
  } else {
    alert("Рядки однакові");
  }
}


function changeBackground() {
  document.body.style.backgroundColor = "lightgoldenrodyellow";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 30000);
}


function redirect() {
  location.href = "https://visitukraine.today/";
}


document.getElementById("main-title").style.color = "darkgreen";

document.querySelectorAll(".info p").forEach(p => {
  p.style.fontStyle = "italic";
  p.textContent += " (оновлено)";
});


const title = document.getElementById("main-title");
console.log("innerHTML:", title.innerHTML);
console.log("outerHTML:", title.outerHTML);
console.log("textContent:", title.textContent);


const newParagraph = document.createElement("p");
const text = document.createTextNode("Це новий параграф, створений через JS.");
newParagraph.appendChild(text);

document.body.append(newParagraph);
document.body.prepend("🔝 ");
newParagraph.after(" 👉 це після параграфа");

newParagraph.replaceWith("❗ Заміна параграфа");

newParagraph.remove();
