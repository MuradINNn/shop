import './App.scss';
import {Routes,Route}from 'react-router-dom'
import Mainpage from './page/Mainpage/Mainpage';
import Contactpage from './page/Contactpage/Contactpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
