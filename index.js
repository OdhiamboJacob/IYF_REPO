// image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./media/beast.jpg") {
    myImage.setAttribute("src", "./media/Alex Bro 20230316_075006.jpg");
  } else {
    myImage.setAttribute("src", "./media/beast.jpg");
  }
};
// manipulating button action
let myButton = document.querySelector("button");
let myHeading = document.querySelector("#head1");

//setting and manipulating username
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `This Website is cool, ${myName}`;
    }
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `This Website is cool, ${storedName}`;
      }
};

//button  action on  click
myButton.onclick = () =>{
    setUserName();
};






