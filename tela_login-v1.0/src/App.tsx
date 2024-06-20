import './index.css'
import Login from './components/Login/Login';


function App() {

  return (
    <div className='min-h-screen m-0 p-0 flex flex-col justify-center items-center box-border' style={{ backgroundImage: "url(/images/background/bg.webp)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Login />
    </div>
  )
}

export default App
