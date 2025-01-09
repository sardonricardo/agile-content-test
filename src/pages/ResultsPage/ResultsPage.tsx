import React from "react";
import styles from "./results-page.module.css";
import { useSearch } from "../../context/SearchContext";

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
							<li
								key={item.id}
								className={styles.result_item}>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'>
									{item.url}
								</a>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								{/* <img
									src={item.image}
									alt={item.title}
								/> */}
							</li>
						))}
					</ul>
				)}
			</main>
		</div>
	);
};

export default ResultsPage;
