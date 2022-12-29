import logo from './logo.svg';
import './App.css';
import PropAPI from './components/PropAPIExample';
import VariantsExample from './components/VariantsExample';
import PrefixingcomponentsEx from './components/PrefixingcomponentsEx';

function App() {
  return (
    <div className="App">
      <PropAPI/>
      <hr/>
      <VariantsExample/>
      <hr/>
      <PrefixingcomponentsEx/>
    </div>
  );
}

export default App;
