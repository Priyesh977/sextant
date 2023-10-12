import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PacketLatencyDisplay from './PacketLatencyDisplay';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Banner"/>
      
      <Exhibit heading="Public IPV4 Address" url="https://api.ipify.org?format=json"/>

      <Exhibit heading="Public IPV6 Address" url="https://api64.ipify.org?format=json"/>
      
      <Exhibit heading="Packet Latency" url="">
        <PacketLatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
