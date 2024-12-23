
import './App.css'
import Counter from './components/Counter'
import LeftButton from './components/LeftButton'
import RightButton from './components/RightButton'

function App() {


  return (
    <>
      <div className='main-container'>
        <LeftButton />
        <Counter />
        <RightButton/>
      </div>
    </>
  )
}

export default App
