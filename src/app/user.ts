import { Role } from "./role";

export class User {
    employeeId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  hrId: number;
  grade: string;
  password: string;
  role: Role; // Assuming Role is another model class

  constructor(
    employeeId: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string,
    hrId: number,
    grade: string,
    password: string,
    role: Role
  ) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.hrId = hrId;
    this.grade = grade;
    this.password = password;
    this.role = role;
  }
}
