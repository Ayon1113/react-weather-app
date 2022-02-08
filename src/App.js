
import './App.css';
import data from './data';
import ListComponent from './components/ListComponent'
import MonthsDropDown from './components/MonthsDropDown';

function App() {
  return (
    <main className="App">
     <section>
       <label>Select bday month</label>
       <MonthsDropDown/>
       <h3>There are xx birthdays the month of xx</h3>
       <ListComponent people ={data}/>
     </section>
    </main>
  );
}

export default App;
