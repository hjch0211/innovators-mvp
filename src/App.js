import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./pages/AppRoutes";

/**
 * @description Register all provider
 */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
