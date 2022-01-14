import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className="App">
      <PersonCard fname={'Jane'} lname={'Doe'} age={45} hair={'Black'}></PersonCard>
      <PersonCard fname={'John'} lname={'Smith'} age={88} hair={'Brown'}></PersonCard>
      <PersonCard fname={'Millard'} lname={'Fillmore'} age={50} hair={'Brown'}></PersonCard>
      <PersonCard fname={'Maria'} lname={'Smith'} age={62} hair={'Brown'}></PersonCard>
    </div>
  );
}

export default App;
