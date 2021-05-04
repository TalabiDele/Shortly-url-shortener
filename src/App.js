import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Input from "./components/Input/Input";
import Stat from "./components/Stat/Stat";
import Boost from "./components/BoostSection/Boost";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Input />
      <Stat />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
