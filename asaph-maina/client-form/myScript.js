function openTab(event, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }

  // Add the following JavaScript snippet to set "Tab 1" as the default tab
  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("tab1").style.display = "block";
    document.querySelector(".tablinks").classList.add("active");
  });