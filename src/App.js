
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';

function App() {
  let headline = "Yes"
  return (
    <div className="App">
     <MyFirstComponent message={headline}/>
    </div>
  );
}

export default App;
