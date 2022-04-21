
// DOM
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const firstname = document.getElementById("firstname");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const button = document.querySelector(".sendMessage");
const modal = document.getElementById("modal1");

// REGEXP
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,})+$/;

//FUNCTION
export const contactForm = () => {
  class UserData {
    constructor() {
      this.firstname = "";
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }

  let userData = new UserData();

  class CheckUserInfo {
    constructor() {
      this.firstname = false;
      this.name = false;
      this.email = false;
      this.message = false;
    }
  }

  let checkUserInfo = new CheckUserInfo();

  const inputChecker = (regex, input, key) => {
    if (regex.test(input.value)) {
      userData[key] = input.value;
      checkUserInfo[key] = true;
      input.previousElementSibling.children[1].style.display = "none";
    } else {
      checkUserInfo[key] = false;
      button.setAttribute("disabled", "");
      input.previousElementSibling.children[1].style.display = "block";
    }
  };

  const inputValidate = () => {
    allInputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input == firstname) {
          inputChecker(regexName, input, "firstname");
        } else if (input == name) {
          inputChecker(regexName, input, "name");
        } else if (input == email) {
          inputChecker(regexEmail, input, "email");
        }
        refreshButtonStatement();
      });
    });

    message.addEventListener("input", () => {
      if (message.value.split(" ").filter((word) => word.length > 3).length > 4) {
        userData.message = message.value;
        checkUserInfo.message = true;
        message.previousElementSibling.children[1].style.display = "none";
      } else {
        checkUserInfo.message = false;
        message.previousElementSibling.children[1].style.display = "block";
      }
      refreshButtonStatement();
    });

    const everyInputValided = () => Object.values(checkUserInfo).every((value) => value === true);

    const refreshButtonStatement = () => {
      if (everyInputValided() === true) {
        button.removeAttribute("disabled");
      } else {
        button.setAttribute("disabled", "");        
      }
    };

    let reset = () => {
      form.reset();
      userData = new UserData();
      checkUserInfo = new CheckUserInfo();
      button.setAttribute("disabled", "");
    };

    button.addEventListener("click", (e) => {
      e.preventDefault();
      userData.date = new Date().toString().split(" GMT")[0];
      console.log("UserInfo", userData);
      reset();      
    });
  };
  inputValidate();
};
