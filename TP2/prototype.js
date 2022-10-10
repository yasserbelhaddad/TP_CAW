const maze_road = document.getElementById("maze");
const child1 = document.querySelector("#maze :nth-of-type(2)");
const child2 = document.querySelector("#maze :nth-of-type(3)");
const child3 = document.querySelector("#maze :nth-of-type(4)");
const child4 = document.querySelector("#maze :nth-of-type(5)");
const child5 = document.querySelector("#maze :nth-of-type(6)");

const start = document.querySelector("#maze :nth-of-type(1)");
const end = document.querySelector("#maze :nth-of-type(7)");

const bodySelect = document.querySelector("body");
const h2 = document.getElementById("status");

var limitX;
var sX;
// console.log(h2);
// console.log(bodySelect);

stillGoing = false;
// gameover = false;

start.addEventListener("mouseover", function () {
  stillGoing = true;

  if (stillGoing) {
    //Exo1 --------- Exo2 ------------------

    child1.addEventListener("mouseover", function () {
      child1.style.backgroundColor = "red";
      // gameover = true;
      // setTimeout(doNotColor1(), 5000);
      //   alert("Game Over");
      setTimeout(() => {
        child2.style.backgroundColor = "red";
        child3.style.backgroundColor = "red";
        child4.style.backgroundColor = "red";
        child5.style.backgroundColor = "red";
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }, 500);
      stillGoing = false;
    });

    child2.addEventListener("mouseover", function () {
      child2.style.backgroundColor = "red";
      gameover = true;
      setTimeout(() => {
        child1.style.backgroundColor = "red";
        child3.style.backgroundColor = "red";
        child4.style.backgroundColor = "red";
        child5.style.backgroundColor = "red";

        //   alert("Game Over");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }, 500);
      stillGoing = false;
    });

    child3.addEventListener("mouseover", function () {
      child3.style.backgroundColor = "red";

      gameover = true;
      setTimeout(() => {
        child1.style.backgroundColor = "red";
        child2.style.backgroundColor = "red";
        child4.style.backgroundColor = "red";
        child5.style.backgroundColor = "red";
        //   alert("Game Over");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }, 500);
      stillGoing = false;
    });

    child4.addEventListener("mouseover", function () {
      child4.style.backgroundColor = "red";
      gameover = true;
      setTimeout(() => {
        child1.style.backgroundColor = "red";
        child3.style.backgroundColor = "red";
        child2.style.backgroundColor = "red";
        child5.style.backgroundColor = "red";
        //   alert("Game Over");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }, 500);
      stillGoing = false;
    });

    child5.addEventListener("mouseover", function () {
      child5.style.backgroundColor = "red";
      gameover = true;
      setTimeout(() => {
        child1.style.backgroundColor = "red";
        child3.style.backgroundColor = "red";
        child4.style.backgroundColor = "red";
        child2.style.backgroundColor = "red";
        //   alert("Game Over");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }, 500);
      stillGoing = false;
    });
  }

  //Exo 3 ---------------------------

  end.addEventListener("mouseover", function () {
    if (stillGoing) {
      stillGoing = false;
      maze_road.addEventListener("mouseover", function () {
        maze_road.style.backgroundColor = "green";
        // gameover = true;
      });

      //Exo6--------------------------

      alert("u won");
      h2.innerHTML = "u won";
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });
});

//Exo4---------------

start.addEventListener("click", function () {
  window.location.reload();
  gameover = false;
});

//Exo7 ----------------------------------

bodySelect.addEventListener("mouseover", function (e) {
  sX = start.getBoundingClientRect().left;
  console.log(sX);
  limitX = e.clientX;
  console.log(limitX);
  if (limitX < sX && stillGoing) {
    child2.style.backgroundColor = "red";
    child3.style.backgroundColor = "red";
    child4.style.backgroundColor = "red";
    child5.style.backgroundColor = "red";
    child1.style.backgroundColor = "red";
  }
});

// console.log("x"+event.clientX)
// console.log("y"+limitY)

// if (stillGoing && linitY) {
