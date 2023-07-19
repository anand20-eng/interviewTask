const key = 'personData'

export const getData = () => {
  return new Promise((resolve, reject) => {
    const localData = localStorage.getItem(key)
    const persons = localData ? JSON.parse(localData) : []
    console.log('typeof =>', typeof (persons));
    resolve(persons)
  })
}

export const addData = (value) => {
  const thenMethod = (resolve, reject) => {
    const localData = localStorage.getItem(key)
    const users = localData ? JSON.parse(localData) : []
    value.id = users.length + 1
    users.push(value)  //important
    localStorage.setItem(key, JSON.stringify(users))
    resolve({ message: 'data saved', data: value })
  }



  return new Promise(thenMethod)
}



export const bindData = (id) => {
  return new Promise((resolve, reject) => {
    const localData = localStorage.getItem(key)
    const users = localData ? JSON.parse(localData) : []
    const userData = users.find((user) => user.id === id)
    resolve(userData)
  })
}

export const update = (id, user) => {
  return new Promise((resolve, reject) => {
    const localData = localStorage.getItem(key)
    const users = localData ? JSON.parse(localData) : []

    const newData = users.map((item) => {
      if (item.id === id) {
        item.firstName = user.firstName
        item.lastName = user.lastName
      }
      return item
    })
    localStorage.setItem(key, JSON.stringify(newData))
    resolve({ message: 'user update' })
  })
}

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const localData = localStorage.getItem(key)
    const user = localData ? JSON.parse(localData) : []
    const removeData = user.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(removeData));
    resolve({ message: 'delete data' })
  })

}

