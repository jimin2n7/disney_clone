import { GlobalStyles } from './globalStyles';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path='/login' element = {<Login/>}/>
          <Route path='/' element = {<Home/>}/>
          <Route path='/detail/:id' element = {<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
