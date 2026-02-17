import {Person} from "./Person";
export class SchoolClass {
  id:number;
  name:string;
  endDate?:Date;
  persons: Person[] = [];
  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
    console.log("School class creation successful")
  }
  addPerson(person: Person){
    this.persons.push(person);  
  }
  displayPersons(){
    this.persons.forEach(person => {
      console.log(
        `${person.getFullName()} - Birthday: ${person.birthday.toDateString()}`
      )
    })
  }
}

