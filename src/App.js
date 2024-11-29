import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MarketList from "./components/MarketList";
import MarketStats from "./components/MarketStats";
import { MarketProvider } from "./context/MarketContext";
// import MarketForm from "./components/MarketForm";
import AboutPage from "./pages/AboutPage";

function App() {
  // const { MarketProvider } = useContext(MarketContext);
  // JSX expressions must have one parent element.
  // if we need to return multiple elements, wrap them in one parent element
  return (
    <MarketProvider>
      <Router>
        <Header />
        <div className="container">
          {/* 如果下方没有exact关键字，因为/about也有，所以about那页也会有主页的所有组件 */}
          <Routes>
            <Route exact path="/" element={<MarketList />}></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </MarketProvider>
  );
}
export default App;
