//percentage Calculator

function calculatePercentage() {
  const obtMarksRef = document.querySelector("#obtMarks");
  const totalMarksRef = document.querySelector("#totalMarks");
  const percentagedivRef = document.querySelector("#percentage");

  let obtMarks = Number(obtMarksRef.value);
  let totalMarks = Number(totalMarksRef.value);
  console.log(totalMarks);
  console.log(obtMarks);

  const percentage = (obtMarks / totalMarks) * 100;
  percentagedivRef.innerHTML = percentage;
}



