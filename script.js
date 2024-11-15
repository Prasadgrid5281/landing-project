// Cookie banner

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("footer-bottom").style.display = "none";
});

// document.getElementById("checkBtn").addEventListener("click", function (e) {
//   e.preventDefault();
// });

// Feature section
let scrollContainer = document.querySelector("#gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 500;
});

// Tabs section
document.getElementById("tab-handle").addEventListener("click", function () {
  const articleContentHTML = `
  <div class="article-section-content__element__cards">
    ${cardsData
      .map(
        (card, index) => `
          <div class="article-section-content__element__card" onClick="updateBigCard(${index})">
            <img src="${card.img}" alt="article-img" class="article-img" />
            <div class="card-content">
              <div class="card-content__name">
                <img src="${card.avatar}" alt="avatar" class="card-content__name-avatar">
                <p>${card.avatarName}</p>
              </div>
              <p>${card.title}</p>
              <div class="card-content__icon">
                <img src="${card.icon}" alt="">
                <p>${card.time} | ${card.date}</p>
              </div>
            </div>
          </div>`
      )
      .join("")}
  </div>`;
  document.getElementById("articleSection1").innerHTML = articleContentHTML;
});

const cardsData = [
  {
    img: "images/Img 01.svg",
    avatar: "images/fuser1.png",
    avatarName: "Dianne Russell",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    title: "The things we need to check when we want to buy a house",
    icon: "images/timer-icon.svg",
    time: "8 min read ",
    date: "25 Apr 2021",
  },
  {
    img: "images/Img 02.svg",
    avatar: "images/fuser2.png",
    avatarName: "Dianne Russell",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    title: "7 Ways to distinguish the quality of the house we want to buy",
    icon: "images/timer-icon.svg",
    time: "6 min read ",
    date: "25 Apr 2021",
  },
  {
    img: "images/Img 03.svg",
    avatar: "images/fuser3.png",
    avatarName: "Dianne Russell",
    title: "The best way to know the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    icon: "images/timer-icon.svg",
    time: "4 min read ",
    date: "25 Apr 2021",
  },
];
const articleContentHTML = `
  <div class="article-section-content__element__cards">
    ${cardsData
      .map(
        (card, index) => `
          <div class="article-section-content__element__card" onClick="updateBigCard(${index})">
            <img src="${card.img}" alt="article-img" class="article-img" />
            <div class="card-content">
              <div class="card-content__name">
                <img src="${card.avatar}" alt="avatar" class="card-content__name-avatar">
                <p>${card.avatarName}</p>
              </div>
              <p>${card.title}</p>
              <div class="card-content__icon">
                <img src="${card.icon}" alt="">
                <p>${card.time} | ${card.date}</p>
              </div>
            </div>
          </div>`
      )
      .join("")}
  </div>`;
document.getElementById("articleSection").innerHTML = articleContentHTML;

// Function to update the Big Card with selected card data
function updateBigCard(index) {
  const card = cardsData[index];
  document.getElementById("bigCardImg").src = card.img;
  document.getElementById("bigCardAvatar").src = card.avatar;
  document.getElementById("bigCardAuthor").textContent = card.avatarName;
  document.getElementById("bigCardTitle").textContent = card.title;
  document.getElementById("bigCardDescription").textContent = card.description;
  document.getElementById(
    "bigCardReadTime"
  ).textContent = `${card.time} | ${card.date}`;
}

// Initialize the big card with the first card's data
updateBigCard(0);
