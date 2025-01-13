import React from "react";
import { useSearch } from "../../context/SearchContext";
import styles from "./results-page.module.css";
import ListItem from "../../components/ListItem/ListItem";
import Card from "../../components/Card/Card";

const ResultsPage: React.FC = () => {
	const {
		filteredData,
		loading,
		setSelectedItem,
		selectedItem,
		isSmallScreen,
	} = useSearch();

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

	return (
		<div className={styles.results_page}>
			{selectedItem && isSmallScreen && (
				<div className={styles.modal_overlay}></div>
			)}
			<main className={styles.content}>
				{loading ? (
					<p>Loading...</p>
				) : filteredData.length === 0 ? (
					<p>No results found.</p>
				) : (
					<div className={styles.results_container}>
						<ul className={styles.results_list}>
							{filteredData.map((item) => (
								<ListItem
									key={item.id}
									item={item}
									onClick={() => setSelectedItem(item)}
								/>
							))}
						</ul>
					</div>
				)}
				{selectedItem && (
					<Card
						item={selectedItem}
						onClose={handleCloseModal}
					/>
				)}
			</main>
		</div>
	);
};

export default ResultsPage;
