import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from './assets/Button/Button'
import ButtonInline from "./ButtonInline"
import Student from "./Students"
import UserGreeting from "./UserGreeting"
import List from "./List"
import ButtonClick from "./ButtonClick"
import ProfilePicture from "./ProfilePicture"
import UseStateComponent from "./UseStateComponent"
import OnChangeComponent from "./OnChangeComponent"
import ColorPicker from "./ColorPicker"
import UpdaterFunctions from "./UpdaterFunctions"
import UpdateObjects from "./UpdateObjects"
import UpdateArrays from "./UpdateArrays"
import UpdateArraysOfObjects from "./UpdateArraysOfObjects"

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 }
  ]
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Caio" />
      <Card />
      <Button />
      <ButtonInline />
      <Header />
      <UpdateArraysOfObjects />
      <UpdateArrays />
      <UpdateObjects />
      <UpdaterFunctions />
      <ColorPicker />
      <OnChangeComponent />
      <UseStateComponent />
      <ButtonClick />
      <ProfilePicture />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {/*<List />*/}
      <Student name="Caio" age={24} isStudent={true} />
      <Student name="Erika" age={25} isStudent={false} />
      <Student />
      <Footer />
      <Food />
    </>
  );
}

export default App
