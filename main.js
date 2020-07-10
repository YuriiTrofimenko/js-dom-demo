document.addEventListener('DOMContentLoaded', function (loadedEventArgs) {
  const viewState = {
    'students': []
  }
  const addUserForm =  document.getElementById('addStudent')
  addUserForm.addEventListener('submit', addStudentEventArgs => {
    addStudentEventArgs.preventDefault()
    viewState.students.unshift({
      'name': addUserForm.name.value,
      'age': addUserForm.age.value,
      'avgScore': addUserForm.avgScore.value
    })
    const userList = document.querySelector('#students > ul')
    userList.innerHTML = ''
    viewState.students.forEach(s => {
      const userLi = document.createElement('li')
      const userNameDiv = document.createElement('div')
      userNameDiv.innerHTML = s.name
      const userAgeDiv = document.createElement('div')
      userAgeDiv.innerHTML = s.age
      userLi.appendChild(userNameDiv)
      userLi.appendChild(userAgeDiv)
      userList.appendChild(userLi)
    })
  })
})