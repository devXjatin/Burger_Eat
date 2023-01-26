import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import "./styles/App.scss"
import "./styles/Header.scss"



function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;