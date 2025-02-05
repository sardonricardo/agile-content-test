import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataService } from "../services/DataService";
import { FilterService } from "../services/FilterService";

interface SearchContextProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	handleSearch: () => void;
	handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	fetchData: () => void;
	loading: boolean;
	filteredData: {
		id: number;
		title: string;
		type: string;
		description: string;
		image: string;
		url: string;
	}[];
	selectedItem: ResultItem | null;
	setSelectedItem: (item: ResultItem | null) => void;
	isSmallScreen: boolean;
}
interface ResultItem {
	id: number;
	image: string;
	url: string;
	title: string;
	type: string;
	description: string;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();
	const [data, setData] = useState<
		{
			id: number;
			title: string;
			type: string;
			description: string;
			image: string;
			url: string;
		}[]
	>([]);
	const [filteredData, setFilteredData] = useState<typeof data>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedItem, setSelectedItem] = useState<ResultItem | null>(null);

	//screen size for responsive design
	//TODO: Refactor this to use a custom hook
	const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
		window.innerWidth < 768
	);

	const fetchData = () => {
		setSelectedItem(null);
		setLoading(true);
		setTimeout(() => {
			const generatedData = DataService.generateData();
			setData(generatedData);
			const results = FilterService.filterData(generatedData, searchTerm);
			setFilteredData(results);
			setLoading(false);
		}, 2000);
	};

	const handleSearch = () => {
		if (searchTerm.trim()) {
			fetchData();
			navigate("/results", { state: { searchTerm } });
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	//screen size for responsive design
	//TODO: Refactor this to use a custom hook
	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<SearchContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				handleSearch,
				handleKeyPress,
				fetchData,
				loading,
				filteredData,
				selectedItem,
				setSelectedItem,
				isSmallScreen,
			}}>
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
