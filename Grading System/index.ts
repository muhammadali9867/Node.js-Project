// Grading System
let maxMarks:number = 850;
let obtMarks:number = 640;

let percent:number = (obtMarks * 100) / maxMarks;
console.log(percent);

if (percent >= 80 && percent <= 100) {
console.log("Exceptional, Your Grade is A1");
} else if (percent >= 70 && percent <= 79) {
console.log("Excellent, Your Grade is A");
} else if (percent >= 60 && percent <= 69) {
console.log("Very good, Your Grade is B");
} else if (percent >= 50 && percent <= 59) {
console.log("Good, Your Grade is C");
} else if (percent >= 40 && percent <= 49) {
console.log("Very Fair, Your Grade is D");
} else if (percent >= 33 && percent <= 39) {
console.log("Fair, Your Grade is E");
} else {
console.log("Fail, Your Grade is F");
};