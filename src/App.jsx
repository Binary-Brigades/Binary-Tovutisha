import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutus from "./Pages/AboutusPage";
import Contactus from "./Pages/ContactPage";
import Donate from "./Pages/DonatePage";
import ImpactInsights from "./Pages/ImpactPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About Us" element={<Aboutus />} />
        <Route path="/Contacts" element={<Contactus />} />
        <Route path="/Impacts and Insights" element={<ImpactInsights />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
export default App
