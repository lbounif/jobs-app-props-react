import './App.css';
import data from "./data.json"
import Header from "./components/Header"
import JobsList from "./components/JobsList"

function App() {
  return (
    <div className="App">
        <Header />
        <JobsList jobsArr = {data} />
    </div>
  );
}

export default App;
