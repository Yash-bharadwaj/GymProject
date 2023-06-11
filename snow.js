window.onload = _snowCanvas({
    el: document.getElementById("snowCanvas")
  });

  window.onload = _snowCanvas({
    el: document.getElementById("snowCanvas"),
    // color of snowflake
    snowColor: "#a6a6a6",
    // background color 
    backgroundColor: "black",
    // max speed
    maxSpeed: 3.5, 
    // min speed
    minSpeed: .3, 
    // amount of snowflakes
    amount: 150, 
    // max radius of snowflake
    rMax: 4,
    // min radius of snowflake
    rMin: 1, 
    // width of canvas
    width: window.innerWidth,
    // height of canvas
    height: window.innerHeight
  });