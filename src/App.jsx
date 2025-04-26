import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Steps from "./components/Steps";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Steps />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
