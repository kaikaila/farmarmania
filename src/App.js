import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MarketList from "./components/MarketList";
import { MarketProvider } from "./context/MarketContext";
import * as Pages from "./pages"; // 导入 index.js 中的所有模块
import WrappedTestFetchPage from "./tests/TestFetchPage";
import TestDetailPage from "./tests/TestDetailPage";
import TestCardItem from "./tests/TestCardItem";

function App() {
  return (
    <MarketProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {Object.entries(Pages).map(([name, Component]) => (
              <Route
                key={name}
                path={`/${name.toLowerCase()}`}
                element={<Component />}
              />
            ))}
            <Route path="/testFetch" element={<WrappedTestFetchPage />} />
            {/* on testDB.json */}
            <Route path="/testDetailPage" element={<TestDetailPage />} />
            <Route path="/test-card-item" element={<TestCardItem />} />
            <Route path="/testMarketList" element={<MarketList />} />
          </Routes>
        </div>
      </Router>
    </MarketProvider>
  );
}
export default App;
