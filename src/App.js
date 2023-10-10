import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Banner"/>
      <Exhibit heading="I am the first exhibit"/>
      <Exhibit heading="I am the second exhibit"/>
      <Exhibit heading="I am the third exhibit"/>
    </div>
  );
}

export default App;
