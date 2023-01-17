export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  nationality: string,
  address?: string,
  sex: "Male"|"Female"
}
