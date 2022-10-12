const mainCard = document.getElementById("mainCard");
const resultCard = document.getElementById("resultCard");
const questionContainer = document.getElementById("question-container");


const hideViews = () => {
  mainCard.classList.remove("hide");
  resultCard.classList.add("hide");
  question-container.classList.add("hide");

};

const goQuestion = () => {
  hideViews();
  questionCard.classList.remove("hide");
};

const goResult = () => {
  hideViews();
  resultCard.classList.remove("hide");
};

const goQuestionContainer = () => {
  hideViews();
  question-container.classList.remove("hide");
};

question-container.addEventListener("click", goQuestionContainer);
mainCard.addEventListener("click", goQuestion);
resultCard.addEventListener("click", goResult);

// const hideViews = () => {
//     contact.classList.add("hide");
//     home.classList.add("hide");
//     about.classList.add("hide");
//   };
//   const goAbout = () => {
//     hideViews();
//     about.classList.remove("hide");
//   };
  
//   const goHome = () => {
//     hideViews();
//     home.classList.remove("hide");
//   };
  
//   const goContact = () => {
//     hideViews();
//     contact.classList.remove("hide");
//   };
  
//   aboutNav.addEventListener("click", goAbout);
//   homeNav.addEventListener("click", goHome);
//   contactNav.addEventListener("click", goContact);
