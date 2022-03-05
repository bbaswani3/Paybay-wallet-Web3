import './App.css'
import { Navbar, Fotter, Loader, Services, Transection, Welcome} from './components';

const App = ()=> {
  

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'> 
        <Navbar/>
        <Welcome/>
        <Fotter/>
      </div>
       
    </div>
  )
}

export default App