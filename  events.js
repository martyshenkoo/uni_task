// 1. Обробник через атрибут
function alertHandler() {
  alert("Подія через атрибут: натискання!");
}

// 2. Призначення обробника через властивість
document.getElementById("secondBtn").onmouseover = function () {
  alert("Подія через властивість: наведення миші!");
};

// 3. Кілька обробників через addEventListener
const btn = document.getElementById("multiHandlerBtn");

function firstHandler() {
  console.log("Перший обробник");
}
function secondHandler() {
  console.log("Другий обробник");
}
btn.addEventListener("click", firstHandler);
btn.addEventListener("click", secondHandler);

// 4. Об'єкт як обробник
const objBtn = document.getElementById("objBtn");

const handlerObj = {
  handleEvent(event) {
    alert("Спрацював об'єкт-обробник на елементі: " + event.currentTarget.tagName);
    objBtn.removeEventListener("click", handlerObj); // Видалення
  }
};
objBtn.addEventListener("click", handlerObj);

// 5. Підсвічування елементів списку
document.getElementById("tourList").onclick = function (event) {
  if (event.target.tagName === "LI") {
    // Очистити старі вибори
    this.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
    event.target.classList.add("selected");
  }
};

// 6. Меню з поведінкою (Behavior Pattern)
document.getElementById("menu").onclick = function (event) {
  if (event.target.tagName !== "BUTTON") return;

  const action = event.target.dataset.action;
  if (action === "start") {
    alert("Тур починається!");
  } else if (action === "pause") {
    alert("Тур поставлено на паузу.");
  } else if (action === "end") {
    alert("Тур завершено.");
  }
};
