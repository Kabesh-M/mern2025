import React from 'react'
import Child from './components/Child'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/login'
import Counter from './components/Counter'
const App = () => {
  var fruits=["Apple","Banana","orange"];
  var user= {username:"viky",password:"123456"}
  return (
    <>
    <div>{/*<Child name="kabesh" age="20"/><Child name="viky" age="26"/>
    *<Home items={fruits} users={user}/>
    *<Skills/>
    *<Contact/>
    *<Login users={user}/>
    */}
    <Counter/></div>
    </>
  )
}

export default App