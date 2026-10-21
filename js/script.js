const messageButton = document.querySelector(".welcome__button");
const result = document.querySelector(".welcome__result");

messageButton.addEventListener("click", () => {
    result.textContent = "今日も素敵な一日になりますように！";
});
