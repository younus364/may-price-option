
import './App.css'
import BarChart from './components/BarChart/BarChart'
import LineChart from './components/LineChart/LineChart'
// import DaisuyNav from './components/DaisuyNav/DaisuyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOprions from './components/PriceOprions/PriceOprions'


function App() {


  return (
    <>
      <NavBar></NavBar>
      
      {/* <DaisuyNav></DaisuyNav> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOprions></PriceOprions>
      {/* <Phones></Phones> */}
      <LineChart></LineChart>
      <BarChart></BarChart>
   
     
    </>
  )
}

export default App
