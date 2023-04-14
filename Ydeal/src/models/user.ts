export class User {
  public email: string
  public phoneNumber: string
  public lastName: string
  public firstName: string
  public pseudo: string
  public description: string
  public campus: string
  public birthDay: string

  constructor(email: string, phoneNumber: string, lastName: string, firstName: string, pseudo: string, description: string, campus: string, birthDay: string) {
    this.email = email
    this.phoneNumber = phoneNumber
    this.lastName = lastName
    this.firstName = firstName
    this.pseudo = pseudo
    this.description = description
    this.campus = campus
    this.birthDay = birthDay
  }
}
