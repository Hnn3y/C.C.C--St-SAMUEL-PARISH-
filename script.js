var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  console.log("Time left: " + distance + "ms");

  if (distance < 0) {
    clearInterval(x);
    console.log("Countdown ended. Displaying New Year message.");
    document.getElementById("christmas-tree-section").style.display = "none";
    document.getElementById("new-year-message").style.display = "block";
  }
}, 1000);