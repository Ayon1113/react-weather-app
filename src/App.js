
import './App.css';
import data from './data';
import ListComponent from './components/ListComponent'

function App() {
  return (
    <main className="App">
     <section>
       <label>Select bday month</label>
       <select>
         <option>January</option>
       </select>
       <h3>There are xx birthdays the month of xx</h3>
       <ListComponent people ={data}/>
     </section>
    </main>
  );
}

export default App;
