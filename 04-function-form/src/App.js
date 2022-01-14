import logo from "./logo.svg";
// import './App.css';
import HookForm from "./components/HookForm";

function App() {
  return (
    <div className="App container ms-5">
      <div class="row">
        <div class="col">Column1</div>
        <div class="col-5 text-center "  >
        <HookForm></HookForm>
        </div>
        <div class="col">Column3</div>
      </div>
    </div>
  );
}

export default App;
