const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rev-1-ORG-TRL-025Lr_High_Res_JPEG-H-2024.webp") {
    myImage.setAttribute("src", "images/kung-fu-panda-4-2024.jpg");
  } else {
    myImage.setAttribute("src", "images/rev-1-ORG-TRL-025Lr_High_Res_JPEG-H-2024.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };