import logo from './logo.svg';
import './App.css';
import Question_Card from './components/Question_Card';

function App() {
  const statement ="main thik hun"
  const papa="my papa"
  return (
    <div className="App">
     <Question_Card  statement ={statement} papa={papa}> Hello beta kaise ho</Question_Card>
    </div>
  );
}

export default App;
