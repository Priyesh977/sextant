// import AddressDisplay from './AddressDisplay';
// import AddressRequest from './AddressRequest';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Banner"/>
      <Exhibit heading="Public IPV4 Address" url="https://api.ipify.org?format=json"/>

      <Exhibit heading="Public IPV6 Address" url="https://api64.ipify.org?format=json"/>
      
    </div>
  );
}

export default App;
