function CalculateNow() {
    var sideLength = document.getElementById("sideLength").value;
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;
    document.getElementById("result-area").innerHTML = "The area of the square is " + area;
    document.getElementById("result-perimeter").innerHTML = "The perimeter of the square is "+ perimeter;
  }
function ResetNow() {
    document.getElementById("form").reset();
    document.getElementById("result-area").innerHTML="";
    document.getElementById("result-perimeter").innerHTML="";
  }
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c' && e.ctrlKey) {
        e.preventDefault();
        CalculateNow();
        shortcutForCrtlS();
    } else if (e.key.toLowerCase() === 'r' && e.ctrlKey) {
        ResetNow();
        shortcutForShiftP();
    }
});
