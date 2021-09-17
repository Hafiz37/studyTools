// import logo from './logo.svg';
import './App.css';
// import nyobaa from "./nyoba";  
import Navbar from "./komponen/navbar/navbar"
import Footer from "./komponen/footer/footer"
import Leaderboard from './komponen/leaderbord/leaderboard';



function App() {
  return (
    <div className="App">
        <Navbar />


        <Leaderboard />

        <Footer />
    </div>
  );
}

export default App;
