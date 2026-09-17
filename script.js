function calculateGrade() {

    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);
    let grade3 = Number(document.getElementById("grade3").value);

    let finalGrade = (grade1 + grade2 + grade3) / 3;

    document.getElementById("result").innerHTML =
        "Final Grade: " + finalGrade;
}