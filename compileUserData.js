var submitUserData = (function (maker) {


  //private variables
  var finalUserData = [];
    

  //functions

  maker.compileUserData = function () {

      var userData = {
      "name": userName.value,
      "email": userEmail.value,
      "dollarAmount": dollarAmount.value,
      "howOftenPay": selectHowOften.value
    };

    for (var x in userData) {
      console.log("var x in userData", x);

      finalUserData += "<p>" + x + ": " + userData[x] + "</p>";
    };
      return finalUserData;
    
    
  };

  return maker;

})(submitUserData || {});