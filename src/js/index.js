//////////////////////////////////
// NAVBAR
//////////////////////////////////
const navBtn = document.querySelector(".hero-nav--btn");
const heroNav = document.querySelector(".hero-nav");

navBtn.addEventListener("click", function () {
  heroNav.classList.toggle("show-nav");
});

//////////////////////////////////
// BOOKMARK
//////////////////////////////////
const bookmarked = document.querySelector(".section-master--btns_bookmark");
const bookmarkedBtn = document.querySelector(
  ".section-master--btns_bookmark button"
);

bookmarked.addEventListener("click", function () {
  bookmarked.classList.toggle("bookmarked");
  if (bookmarked.classList.contains("bookmarked"))
    bookmarkedBtn.innerText = "Bookmarked";
  else {
    bookmarkedBtn.innerText = "Bookmark";
  }
});

//////////////////////////////////
// MODAL
//////////////////////////////////
const modalOpenBtn = document.querySelector(".section-master--btns_project");
const modalCloseBtn = document.querySelector(
  ".section-cards_container--modalclose"
);
const selectRewardBtns = document.querySelectorAll(
  ".project .section-cards_container--card_btn-select"
);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay-body");

const modalThankYou = document.querySelector(".modal-thankyou");
const gotItBtn = document.querySelector(".got-it");

console.log(modalThankYou);

//////////////// WINDOW SCROLL TO TOP ////////////////
const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//////////////// SHOW MODAL ////////////////
const showModal = () => {
  modal.style.display = "flex";
  overlay.style.display = "block";
};

//////////////// HIDE MODAL ////////////////
const hideModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

//////////////// SHOW MODAL THANKYOU ////////////////
const showModalThankYou = () => {
  modalThankYou.style.display = "flex";
  overlay.style.display = "block";
};

//////////////// HIDE MODAL THANKYOU ////////////////
const hideModalThankYou = () => {
  modalThankYou.style.display = "none";
  overlay.style.display = "none";
};

//////////////// OPEN MODAL ////////////////
modalOpenBtn.addEventListener("click", function () {
  showModal();
  scrollToTop();
});

//////////////// CLOSE MODAL ////////////////
modalCloseBtn.addEventListener("click", function () {
  hideModal();
  initialState();
});

//////////////// SHOW MODAL BY SELECTING REWARDS ////////////////
selectRewardBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.innerText === "Out of Stock") {
      return;
    } else {
      showModal();
      scrollToTop();
    }
  });
});

//////////////// RADIO BTNS ////////////////
const radioBtns = document.querySelectorAll(".radiobtn");

//////////////// INITIAL STATE OF THE MODAL ////////////////
const initialState = () => {
  radioBtns.forEach((radioBtn) => {
    const radioBtnSelected = radioBtn.querySelector(".radiobtn-selected");
    const currentPledge =
      radioBtnSelected.parentNode.parentNode.lastElementChild;
    const articleElement = currentPledge.parentElement;

    radioBtnSelected.classList.remove("show-radiobtn_selected");
    currentPledge.classList.remove("show-pledge");
    articleElement.classList.remove("add-dark_border");
  });
};

//////////////// REMOVE CLASSES FROM RADIO BTN AND PLEDGE ////////////////
const removeClasses = (radioBtn, articleElement) => {
  radioBtns.forEach((item) => {
    const allPledge = item.parentElement.lastElementChild;

    if (item !== radioBtn && !articleElement.classList.contains("overlay")) {
      item.firstElementChild.classList.remove("show-radiobtn_selected");
      item.parentElement.classList.remove("add-dark_border");

      if (
        allPledge.classList.contains("show-pledge") &&
        !articleElement.classList.contains("overlay")
      )
        item.parentNode.lastElementChild.classList.remove("show-pledge");
    }
  });
};

//////////////// ADD CLASSES TO RADIO BTN AND PLEDGE ////////////////
radioBtns.forEach((radioBtn) => {
  const radioBtnSelected = radioBtn.querySelector(".radiobtn-selected");
  const currentPledge = radioBtnSelected.parentNode.parentNode.lastElementChild;
  const articleElement = currentPledge.parentElement;

  radioBtn.addEventListener("click", function () {
    if (!articleElement.classList.contains("overlay")) {
      radioBtnSelected.classList.add("show-radiobtn_selected");
      articleElement.classList.add("add-dark_border");
    }

    if (
      currentPledge.classList.contains("pledge") &&
      !articleElement.classList.contains("overlay")
    )
      currentPledge.classList.add("show-pledge");

    removeClasses(radioBtn, articleElement);
  });
});

//////////////// CONTINUE BTN OF PLEDGE ////////////////
const continueBtns = document.querySelectorAll(
  ".pledge .section-cards_container--card_btn-select"
);

continueBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    hideModal();
    initialState();
    scrollToTop();
    showModalThankYou();
  });
});

//////////////// HIDE THANKYOU MODAL BY CLICKING GOT IT BUTTON ////////////////
gotItBtn.addEventListener("click", function () {
  hideModalThankYou();
  scrollToTop();
});
