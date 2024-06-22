import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navigation from './Components/Nevigation/Navigation'

function App() {
  
  return (
    <>
    <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
    <ContactForm />
    </main>
    </>
  )
}

export default App
