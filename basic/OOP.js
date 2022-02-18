class Person {
  constructor(name, lastName, id) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.nationality = "";
    this.birthday = "";
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
  setNationality(nationality) {
    this.nationality = nationality;
  }
  setBirthday(day) {
    this.birthday = day;
  }
}
class Programmer extends Person {
  constructor(name, lastName, id, expertise) {
    super(name, lastName, id);
    this.expertise = [expertise];
    this.experience = 0;
  }
  addExpertise(expertise) {
    this.expertise.push(expertise);
  }
  getExpertise() {
    return this.expertise;
  }
}
let ghack = new Person("Junior", "Calixte", 209);
let paterson = new Person("Paterson", "Lesage", 334);
ghack.getFullName();
let john = new Programmer("John", "doe", 324, "JavaScript");
john.addExpertise("React");
john.getExpertise();
john.getFullName();
