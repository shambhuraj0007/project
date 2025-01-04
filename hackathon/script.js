document.addEventListener("DOMContentLoaded", () => {
    const joinButton = document.querySelector(".join-now");
  
    joinButton.addEventListener("mouseover", () => {
      joinButton.style.transform = "scale(1.1)";
    });
  
    joinButton.addEventListener("mouseout", () => {
      joinButton.style.transform = "scale(1)";
    });
  });
  
  const text="In today’s fast-paced and ever-changing world, learning isn’t one-size-fits-all. The Personalized Learning Pathway Generator is your gateway to a unique, customized educational experience. Whether you’re a student, a professional, or a lifelong learner, this tool is designed to help you achieve your goals efficiently and effectively.take our survey to start learning !!!";
const typewriterElement = document.getElementById("description");
let index = 0;
function typeWriter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 10); // Adjust speed here (in ms)
  }
}

typeWriter();

