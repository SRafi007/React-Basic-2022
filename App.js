import './App.css';
import Navbar from './components/Navbar';
import MyForm from './components/Myform';
function App() {
  return (
    <>
      <Navbar title="my app"/>
      <div className="container">
        <MyForm/>
      </div>
      
    </>
  );
}

export default App;
