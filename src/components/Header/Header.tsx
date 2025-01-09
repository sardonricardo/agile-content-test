import React, { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useLocation } from "react-router-dom";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Header.module.css";

const Header: React.FC = () => {
	const { searchTerm, handleKeyPress, setSearchTerm } = useSearch();
	const [isActive, setIsActive] = useState<boolean>(false);
	const location = useLocation();

	return (
		<header className={styles.header}>
			{location.pathname === "/results" ? (
				<Logo />
			) : (
				<div className={styles.header_left}>
					<h1>Agile Content</h1>
					<span>Frontend test</span>
				</div>
			)}

			{location.pathname === "/results" && (
				<SearchInput
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					isActive={isActive}
					setIsActive={setIsActive}
					handleKeyPress={handleKeyPress}
				/>
			)}
			<div className={styles.header_right}>
				<div className={styles.grid_icon}>
					<TfiLayoutGrid3Alt color='rgb(123 117 117)' />
				</div>
				<img className={styles.user_avatar} />
			</div>
		</header>
	);
};

export default Header;
