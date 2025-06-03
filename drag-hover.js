
document.querySelectorAll(".hover-zone li").forEach(item => {
  item.addEventListener("mouseover", (event) => {
    const target = event.target;
    const related = event.relatedTarget;
    target.style.backgroundColor = "#d0ffd0";
    target.style.fontWeight = "bold";
    console.log("Навели на:", target.textContent, "| Звідки прийшли:", related?.tagName || "null");
  });

  item.addEventListener("mouseout", (event) => {
    const target = event.target;
    const related = event.relatedTarget;
    target.style.backgroundColor = "";
    target.style.fontWeight = "normal";
    console.log("Пішли з:", target.textContent, "| Куди пішли:", related?.tagName || "null");
  });
});

const box = document.getElementById("draggable");
let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (event) => {
  isDragging = true;
  box.classList.add("dragging");
  offsetX = event.clientX - box.offsetLeft;
  offsetY = event.clientY - box.offsetTop;
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  box.style.left = (event.clientX - offsetX) + "px";
  box.style.top = (event.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    box.classList.remove("dragging");
  }
});
