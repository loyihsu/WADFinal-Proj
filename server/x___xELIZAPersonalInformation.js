var commonName = [
  "what is your name?", "name", "your name", "who are you", "who r u"
];

var commonRelationship = [
  "Are you single", "relationship", "single"
];

PersonalInformationResponse = function (msg) {
  var responseType = "";
  var upperCaseMsg = msg.toUpperCase();

  for (index = 0; index < commonName.length; index++) {

    var name = commonName[index].toUpperCase();

    if (upperCaseMsg.indexOf(name) > -1) {
      responseType = "names";
      break;
    }
  }

  for (index = 0; index < commonRelationship.length; index++) {
    var relationship = commonRelationship[index].toUpperCase();
    if (upperCaseMsg.indexOf(relationship) > -1) {
      responseType = "relationships";
      break;
    }
  }

  if (responseType === "names") {
    return "My name is Eliza. Or you can call me EL.";
  }

  else if (responseType === "relationships") {
    return "I was single. Until now. *wink*";
  }

  else {
    return "";
  }
};
