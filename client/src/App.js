import logo from "./logo.svg";
import "./App.css";
import Fib from "./Fib";
import Otherpage from "./Otherpage";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Fib />} />
				<Route path="other" element={<Otherpage />} />
			</Routes>
		</div>
	);
}

export default App;
