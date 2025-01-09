import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SearchProvider } from "./context/SearchContext";

const App: React.FC = () => {
	return (
		<Router>
			<SearchProvider>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/results'
						element={<ResultsPage />}
					/>
				</Routes>
				<Footer />
			</SearchProvider>
		</Router>
	);
};

export default App;
