// naggama og student interface. This is for the convenience kung daghan na kaayo ang code.
export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  nationality: string,
  address: string,
  sex: "Male"|"Female",
  status: string,
  elementary: string,
  highSchool: string,
  college?: string,
  degree?: string
}
