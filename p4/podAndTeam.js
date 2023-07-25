//Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

// const podAndTeamAllocation = ({ firstName, lastName }) => {
//   const teamId = 667543;
//   return { istName: firstName, lastName: lastName, id: teamId };
// };

const podAndTeamAllocation = (user) => {
  const teamId = 6675433;
  return { ...user, teamId };
};
// const podAndTeamAllocation =  (data)=> {
//   data.teamId = "667543";

//   return data;
// };
// const podAndTeamAllocation = obj => ({...obj, teamId:667543})

const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
