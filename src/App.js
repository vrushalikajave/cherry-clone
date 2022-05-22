
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Resturants from './components/Resturants';
import userInfo from "./data/userInfo"
import offers from './data/Offers';
import restaurents from './data/restaurents';

function App() {
  return (
    <div>
    <Navbar {...userInfo.location}/>
    <Offers offers={offers}/>
   <section class="near-you">
    <Filters/>
    <Resturants resturants={restaurents}/>
    
    </section>
    </div>
  );
}

export default App;
