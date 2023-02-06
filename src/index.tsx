import ReactDOM from "react-dom/client";
import "./index.css";

import { AppContainer } from "./components/app-containers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppContainer />);
