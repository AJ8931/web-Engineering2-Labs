$(document).ready(function () {
  // Selecting elements
  var paragraph = $("p");
  var button = $("button");

  //   // Toggling a class
  //   button.click(function () {
  //     paragraph.toggleClass("highlight");
  //   });
  $("button").click(function () {
    // $("#div1").load(
    //   "https://dummyjson.com/products/1",
    //   function (responseTxt, statusTxt, xhr) {
    //     if (statusTxt == "loading") {
    //       paragraph.toggleClass("highlight");
    //     }
    //     if (statusTxt == "success") {
    //       paragraph.toggleClass("highlight");
    //       alert("External content loaded successfully!");
    //     }
    //     if (statusTxt == "error")
    //       alert("Error: " + xhr.status + ": " + xhr.statusText);
    //   }
    // );

    $.get("https://dummyjson.com/products/1", function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
