function showSubjectInputFields() {

    // Clear any existing additions to the div
    document.getElementById("subjects").innerHTML = "";
    document.getElementById("percentage").innerHTML = "";
    document.getElementById("grade").innerHTML = "";

    // Get the number of subjects entered by the student
    let numberOfSubjects = document.getElementById("numberOfSubjects").value

    // Create a number input field for each subject
    for (let i = 0; i < numberOfSubjects; i++) {
        let div = document.getElementById("subjects")
        let paragraph = document.createElement("p")
        let input = document.createElement("input")
        input.type = 'number';
        input.classList.add('form-control')
        input.id = 'subject'+i
        div.append(input, paragraph)
    }

    // Add a button to calculate the grade
    let div = document.getElementById("subjects")
    let paragraph = document.createElement("p")

    var button = document.createElement('button');
    button.innerHTML = 'Calculate Grade';
    button.classList.add("btn", "btn-success")
    
    button.onclick = function(){
      calculate()
    };
    
    div.append(button, paragraph)

}

function calculate() {
    
    // Clear any existing additions to the results paragraph
    document.getElementById("percentage").innerHTML = "";
    document.getElementById("grade").innerHTML = "";

    console.log("Calculate")
    let numberOfSubjects = document.getElementById("numberOfSubjects").value
    totalMarks = 0

    for (let i = 0; i < numberOfSubjects; i++) {
        totalMarks += parseInt(document.getElementById("subject"+i).value)
    }
    console.log(totalMarks)

    let divPercentage = document.getElementById("percentage")
    let divGrade = document.getElementById("grade")

    let percentage = document.createElement("h1")
    let percentageText = document.createElement("h4")
    let grade = document.createElement("h1")
    let gradeText = document.createElement("h4")

    let result = totalMarks / numberOfSubjects
    let rounded = Math.round(result * 10) / 10

    percentage.append(rounded + "%")
    percentageText.append("Overall")
    grade.append(getGrade(rounded))
    gradeText.append("Grade")

    divPercentage.append(percentage)
    divPercentage.append(percentageText)
    divGrade.append(grade)
    divGrade.append(gradeText)
}

function getGrade(result) {
    console.log(result)
    if (result > 84) {
        return "A"
    } else if (result > 69 && result < 85) {
        return "B"
    } else if (result > 54 && result < 70) {
        return "C"
    } else if (result > 39 && result < 55) {
        return "D"
    } else if (result > 24 && result < 40) {
        return "E"
    } else if (result > 9 && result < 25) {
        return "F"
    } else {
        return "No Grade"
    }
}
