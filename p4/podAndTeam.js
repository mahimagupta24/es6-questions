//Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = ({ firstName, lastName }) => {
  const teamId = 667543;
  return { istName: firstName, lastName: lastName, id: teamId };
};


// const podAndTeamAllocation = (user) =>{
//   var teamId =2433;
//   return {...user,teamId}
// }


const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
