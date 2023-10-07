import './App.css';
import Greet from './components/greet';

function App() {
  return (
    <div className="App">
      <body class="is-preload">

        <header>
          <h1>Carbon!</h1>
          <p>What is your carbon footprint?</p>
        </header>

        <form action="">
          
          <label for="modes-of-transportation">Choose a method of transportation:</label> 
          <select name="transportation-names" id="transportation-names"> 
              <option value="Car">Car</option> 
              <option value="Plane">Plane</option> 
              <option value="bicycle">Bicycle</option>
              <option value="walking">Walking</option> 
              <option value="public-transportation">Public Transportation</option>  
          </select>
          
          <input class="miles-input" type="number" placeholder="How many miles?"/>
          <button class="btn-search">Calculate now!</button>
        </form>
      </body>
    </div>
  );
}

export default App;
