// SearchInput.tsx
import React from "react";
import { MdSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import styles from "./search-input.module.css";

interface SearchInputProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	isActive: boolean;
	setIsActive: (value: boolean) => void;
	handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	viewMode?: "navbar" | "menu";
}

const SearchInput: React.FC<SearchInputProps> = ({
	searchTerm,
	setSearchTerm,
	isActive,
	setIsActive,
	handleKeyPress,
}) => {
	return (
		<div
			className={`${styles.input_wrapper} ${isActive ? styles.active : ""}`}
			onFocus={() => setIsActive(true)}
			onBlur={() => setIsActive(false)}>
			<div className={styles.search_icon}>
				<MdSearch size={18} />
			</div>
			<input
				type='text'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyPress}
			/>

			<div
				className={styles.delete_icon}
				onClick={() => setSearchTerm("")}>
				<RxCross2 size={18} />
			</div>
		</div>
	);
};

export default SearchInput;
