/* You're going on a trip with some students and it's up to you to keep track of how much money each Student has. 
A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name
of the student with the most money. If every student has the same amount, then return "all".

Notes:
Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

function mostMoney(students) {

  if (students.length < 2) return students[0].name;

  let totals = [], count = 0;

  for (let i = 0; i < students.length; i++){
    let current = students[i].fives*5+students[i].tens*10+students[i].twenties*20;
    totals.push([current, students[i].name]);

    if (i > 0){
      let previous = students[i-1].fives*5+students[i-1].tens*10+students[i-1].twenties*20;
      if (current === previous ){
          count++;
        }
      }
    }

 const sortedTotals = totals.sort((a, b) => a[0] - b[0]);

 return count === students.length-1 ? "all" : sortedTotals[sortedTotals.length-1][1]

}
