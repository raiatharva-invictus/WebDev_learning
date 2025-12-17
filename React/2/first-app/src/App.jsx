import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/card'

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title="Card1" desc="This is desc of card 1"/>
      <Card title="Card2" desc="This is desc of Card 2"/>
      <Card title="Card3" desc="This is desc of card 3"/>
      <Card title="Card4" desc="This is desc of card 4"/>
      <Card title="Card5" desc="This is desc of card 5"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
