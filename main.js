// code by @nikhilnotse
// created on 22 oct 2023

let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let submit = document.getElementById("submit");
let folderEyes = document.querySelectorAll(".eyes");

// Notifications var
let closeBtn = document.querySelector(".close-btn");
let notify = document.querySelector(".notify");
let touchIcon = document.querySelector(".touch-icon");
let mouseIcon = document.querySelector(".mouse-icon");
let errorIcon = document.querySelector(".error-icon");
let primaryText = document.querySelector(".primary-text");
let secondaryText = document.querySelector(".secondary-text");

let MessageContainer = document.querySelector(".message-box");
let MessageText = document.querySelector(".msg-text");
let mouth = document.querySelector(".mouth");

let showPasswordBtn = document.querySelector(".showpassword");

const FolderLookDown = (event) => {
  // removing unnecessary calls
  // userName.removeEventListener("input", FolderLookDown);
  // passWord.removeEventListener("input", FolderLookDown);

  if (event.target.id === "username") {
    MessageBox(userName.value);
  } else {
    MessageBox(passWord.value);
  }
  // looping two div elements
  folderEyes.forEach((eyes) => {
    if (!eyes.className.includes("folder-stare")) {
      eyes.children[0].classList.add("eye-pupil-down");
      eyes.classList.add("folder-stare");
      eyes.classList.remove("folder-looking-up");
    }
  });
};

const FolderLookUp = (event) => {
  // adding again
  // userName.addEventListener("input", FolderLookDown);
  // passWord.addEventListener("input", FolderLookDown);
  MessageContainer.style.animation = "";
  // looping two div elements
  folderEyes.forEach((eyes) => {
    if (!eyes.className.includes("folder-looking-up")) {
      eyes.children[0].classList.remove("eye-pupil-down");
      console.log("change runs");
      eyes.classList.add("folder-looking-up");
      eyes.classList.remove("folder-stare");
    }
  });
};

// sending data to server using fetch post method
// const postData = (data) => {
//   return fetch("http://localhost:4000/data", {
//     method: "POST", // GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, cors, same-origin
//     cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((response) => response); // parses JSON response into native JavaScript objects
// };

function MessageBox(text) {
  MessageText.innerText = text;
  MessageContainer.style.animation = "message-1 .2s forwards";
}

// notification alert code
function notification(ttl = "", sub = "", type = "error") {
  notify.style.right = "10px";
  if ("ontouchstart" in document.body) {
    touchIcon.style.display = "block";
    secondaryText.innerText = "Touch and hold to create a new folder";
    return;
  } else {
    mouseIcon.style.display = "block";
  }
  if (type === "error") {
    errorIcon.style.display = "block";
    mouseIcon.style.display = "none";
    touchIcon.style.display = "none";
  } else {
    errorIcon.style.display = "none";
    mouseIcon.style.display = "block";
    touchIcon.style.display = "none";
  }
  primaryText.innerText = ttl;
  secondaryText.innerText = sub;
}
closeBtn.addEventListener("click", function () {
  notify.style.right = "-400px";
});

userName.addEventListener("input", FolderLookDown);
userName.addEventListener("change", FolderLookUp);
passWord.addEventListener("input", FolderLookDown);
passWord.addEventListener("change", FolderLookUp);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let username = userName.value.trim();
  let password = passWord.value;
  if (username === "" || password === "") {
    // notification("Fill the empty fields");
    MessageBox("Fill the empty fields");
  } else if (username === "notse1278" && password === "notse") {
    // notification("success", "Submit successfully", "success");
    // let data = {
    //   username: username,
    //   password: password,
    // };
    // postData(data)
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((e) => console.log(e));
    MessageBox("Hello, Nikhil Notse");
    mouth.classList.add("folder-smile");
    userName.value = passWord.value = "";
  } else {
    // notification("Access Denied", "Incorrect Username or Password  ");
    MessageBox("Incorrect inputs !!!!");
  }
});

showPasswordBtn.addEventListener("click", () => {
  showPasswordBtn.classList.toggle("fa-eye-slash");
  if (showPasswordBtn.classList.value.includes("fa-eye-slash")) {
    passWord.removeEventListener("input", FolderLookDown);
    passWord.removeEventListener("change", FolderLookUp);
    MessageBox("It's a secret code!!!!");
  } else {
    MessageBox(passWord.value);
    passWord.addEventListener("input", FolderLookDown);
    passWord.addEventListener("change", FolderLookUp);
  }
});
