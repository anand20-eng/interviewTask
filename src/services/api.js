
export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve([{
      firstName: "abc",
      lastName: 'last name',
      employeeId: 2,
      JobTitle: 'IT'
    },
    {
      firstName: "pqr", 
      lastName: 'test',
      employeeId: 2,
      JobTitle: 'IT'
    }
    ])
  })
}