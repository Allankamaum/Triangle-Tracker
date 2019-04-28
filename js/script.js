function answer() {
  //Make variables for the three values.
  var L1 = parseInt(document.getElementById("L1").value);
  var L2 = parseInt(document.getElementById("L2").value);
  var L3 = parseInt(document.getElementById("L3").value);

  var array = [L1, L2, L3];
  //Make an empty container to add text later.
  var text;
  //vales for an Equilateral traingle
  if (
    L1 === L2 &&
    L2 === L3 &&
    L3 === L1
  ) {
    text = " an Equilateral Traingle.";
  }

  //vales for an Isosceles traingle
  else if (
    L1 === L3 ||
    L3 === L2 ||
    L1 !== L2
  ) {
    alert = "an isosceles Traingle.";
  }
  //Second condition for an isosceles traingle
  // else if (
  //   L1 === L2 ||
  //   L2 === L3 ||
  //   L3 !== L1
  // ) {
  //     alert = "an isosceles Traingle.";
  // }
  //vales for an scalene traingle
  else if (
    L1 !== L2 &&
    L1 !== L3 &&
    L2 !== L3
  ) {
    alert = "a scalene Traingle.";

    else if (
      (L1 + L2 <= L3) ||
      (L1 + L3 <= L2) ||
      (L2 + L3 <= L1)
    ) {
      text = " Not a Triangle";
    }
    else {
      text = "Error";
    }

    alert("This are the values you entered:" + " [" + array.join() + "] " + "\nThis is " + text);
    ")
  }
