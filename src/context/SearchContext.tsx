import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContextProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	handleSearch: () => void;
	handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleSearch = () => {
		if (searchTerm.trim()) {
			navigate("/results", { state: { searchTerm } });
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<SearchContext.Provider
			value={{ searchTerm, setSearchTerm, handleSearch, handleKeyPress }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = (): SearchContextProps => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearch must be used within a SearchProvider");
	}
	return context;
};
