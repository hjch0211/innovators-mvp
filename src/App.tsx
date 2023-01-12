import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./pages/AppRoutes";
import MUIThemeProvider from "./MUIThemeProvider";

/**
 * @description Register all provider
 */
function App() {
  return (
    <Router>
      <MUIThemeProvider>
        <AppRoutes />
      </MUIThemeProvider>
    </Router>
  );
}

export default App;
