import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import './App.css' ;
import ScrollIndicator from '../src/components/ScrollIndicator'

function App() {
  return (
    <BrowserRouter>
      <Home></Home>
      <ScrollIndicator></ScrollIndicator>
    </BrowserRouter>
  );
}

export default App;
