import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useSearch } from "../../context/SearchContext";
import styles from "./home-page.module.css";

const HomePage: React.FC = () => {
	const { searchTerm, setSearchTerm, handleKeyPress, handleSearch } =
		useSearch();
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div className={styles.home_page}>
			<Logo />
			<div className={styles.search_container}>
				<SearchInput
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					isActive={isActive}
					setIsActive={setIsActive}
					handleKeyPress={handleKeyPress}
				/>

				<button
					onClick={handleSearch}
					disabled={!searchTerm.trim()}>
					Search
				</button>
			</div>
		</div>
	);
};

export default HomePage;
