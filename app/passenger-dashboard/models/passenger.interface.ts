export interface Child {
  name: string,
  age: number
}

export interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number,//? means optional part of interface
  children?: Child[]

}
