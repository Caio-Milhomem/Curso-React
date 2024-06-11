import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from './assets/Button/Button'
import ButtonInline from "./ButtonInline"
import Student from "./Students"

function App() {

  return (
    <>
      <Card />
      <Button />
      <ButtonInline />
      <Header />
      <Student name="Caio" age={24} isStudent={true} />
      <Student name="Erika" age={25} isStudent={false} />
      <Student />
      <Footer />
      <Food />
    </>
  );
}

export default App
