function doGet() {
  return HtmlService.createHtmlOutputFromFile("page");
}

function userclicked(name) {
  var url = "https://docs.google.com/spreadsheets/d/10IGcpEWu0fkAYU6G35a7GeD926FwqzD2pC0joj8yJjU/edit?gid=0#";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  // Append the name and the current date to the next available row
  ws.appendRow([name, new Date()]);
  
  // Optionally, log the operation
  Logger.log(name + " clicked the button");
}
