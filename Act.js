var grades = prompt("What is your final grade? ");

grade = Number(grades);

if (grade >= 75){
    console.log("You passed!, Congrats.");
}
else if(grade <= 74) {
    console.log("You failed!")
}
else if (grade >= 88){
    console.log("Excellent you are a DL!")
}
else if( grade >= 97 ){

    console.log("Excelent you are a PL!")
}