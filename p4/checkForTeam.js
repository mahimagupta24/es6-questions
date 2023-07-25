//Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

// const checkForTeam = (student) => {
//   for (let key in student) {
//     if (key === "team") {
//       return student;
//     }
//   }
//   {
//     return { ...student, team: "A" };
//   }
// };

// const checkForTeam = (student) => {
// if(student.team===undefined){
//   student['team']="A";
// }
//   return student
// }
 const checkForTeam =(student)=>({...student,team:student.team??'A'})
// const checkForTeam = ({ team = "A", ...obj }) => ({...obj, team})

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));


console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));


console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));

