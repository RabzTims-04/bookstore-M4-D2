import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import LatestRelease from "./components/LatestRelease";
function App() {
  return (
    <div>
      
        <MyNav brand='Rabz BookStore'/>
        <Welcome />
        <LatestRelease/>
        <MyFooter />
           
    </div>
  );
}

export default App;
