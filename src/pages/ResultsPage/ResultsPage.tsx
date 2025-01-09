import React from "react";
import styles from "./results-page.module.css";
import { useSearch } from "../../context/SearchContext";
import ListItem from "../../components/ListItem/ListItem";

const ResultsPage: React.FC = () => {
	const { loading, filteredData } = useSearch();

	return (
		<div className='results-page'>
			<main className={styles.content}>
				{loading ? (
					<p>Loading...</p>
				) : filteredData.length === 0 ? (
					<p>No results found.</p>
				) : (
					<ul className={styles.results_list}>
						{filteredData.map((item) => (
							<ListItem
								key={item.id}
								item={item}
							/>
						))}
					</ul>
				)}
			</main>
		</div>
	);
};

export default ResultsPage;
