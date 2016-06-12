//add DOM elements by ID //

var userName = document.getElementById("userName");

var cancelButton = document.getElementById("cancelButton");

var submitButton = document.getElementById("submitButton");

var dollarAmount = document.getElementById("dollarAmount");

var selectHowOften = document.getElementById("selectHowOften");

var userEmail = document.getElementById("userEmail");

var userInfo = document.getElementById("userInfo");




//functions

var submitUserData = (function () {

  console.log("submituserdata working?", "yes");

  //functions
  return {

  printUserData: function() {
    console.log("printuserdata working?", "yes");
    userInfo.innerHTML = submitUserData.compileUserData();
  },


  cancelSubmission: function () {
    userName.value = "";
    userEmail.value = "";
    dollarAmount.value = "";
    userInfo.innerHTML = "";
  }

  }

}) (submitUserData || {});

  function test () {
    console.log("test", test);
  }

  //add event listeners

  submitButton.addEventListener("click", submitUserData.printUserData);

  cancelButton.addEventListener("click", submitUserData.cancelSubmission);