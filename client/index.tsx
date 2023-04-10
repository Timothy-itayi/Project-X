
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import App from './components/App'

createRoot(document.getElementById("app") as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
