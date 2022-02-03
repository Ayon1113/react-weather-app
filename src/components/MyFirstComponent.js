import logo from '../logo.svg';
import MyHeadline from './MyHeadline';
 
 function MyFirstComponent(props){
    return( 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyHeadline headline={props.message}/>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
    </header>
  )
}

export default MyFirstComponent;