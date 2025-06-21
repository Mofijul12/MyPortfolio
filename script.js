// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 98,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 90,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// C# progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 95,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 70,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// Angular progress circular bar
let angularProgress = document.querySelector(".angular"),
  angularValue = document.querySelector(".angular-progress");

let angularStartValue = 0,
  angularEndValue = 75,
  angularSpeed = 30;

let progressAngular = setInterval(() => {
  angularStartValue++;
  angularValue.textContent = `${angularStartValue}%`;
  angularProgress.style.background = `conic-gradient(#E63F9A ${angularStartValue * 3.6}deg, #ededed 0deg)`;

  if (angularStartValue == angularEndValue) {
    clearInterval(progressAngular);
  }
}, angularSpeed);

// SQL Server progress circular bar
let sqlProgress = document.querySelector(".sqlserver"),
  sqlValue = document.querySelector(".sqlserver-progress");

let sqlStartValue = 0,
  sqlEndValue = 90,
  sqlSpeed = 30;

let progressSQL = setInterval(() => {
  sqlStartValue++;
  sqlValue.textContent = `${sqlStartValue}%`;
  sqlProgress.style.background = `conic-gradient(#0A74DA ${sqlStartValue * 3.6}deg, #ededed 0deg)`;

  if (sqlStartValue == sqlEndValue) {
    clearInterval(progressSQL);
  }
}, sqlSpeed);

// Node.js progress circular bar
let nodeProgress = document.querySelector(".nodejs"),
  nodeValue = document.querySelector(".nodejs-progress");

let nodeStartValue = 0,
  nodeEndValue = 60,
  nodeSpeed = 30;

let progressNode = setInterval(() => {
  nodeStartValue++;
  nodeValue.textContent = `${nodeStartValue}%`;
  nodeProgress.style.background = `conic-gradient(#68a063 ${nodeStartValue * 3.6}deg, #ededed 0deg)`;

  if (nodeStartValue == nodeEndValue) {
    clearInterval(progressNode);
  }
}, nodeSpeed);




// Mongo Server progress circular bar
let mongoProgress = document.querySelector(".mongo"),
  mongoValue = document.querySelector(".mongo-progress");

let mongoStartValue = 0,
  mongoEndValue = 55,
  mongoSpeed = 30;

let progressMongo = setInterval(() => {
  mongoStartValue++;
  mongoValue.textContent = `${mongoStartValue}%`;
  mongoProgress.style.background = `conic-gradient(#708090 ${mongoStartValue * 3.6}deg, #ededed 0deg)`;

  if (mongoStartValue == mongoEndValue) {
    clearInterval(progressMongo);
  }
}, mongoSpeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});