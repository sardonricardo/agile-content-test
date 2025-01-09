import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataService } from "../../services/DataService";
import { FilterService } from "../../services/FilterService";

const ResultsPage: React.FC = () => {
	const location = useLocation();
	const { searchTerm } = location.state as { searchTerm: string };

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

	useEffect(() => {
		const fetchData = () => {
			setLoading(true);
			setTimeout(() => {
				const generatedData = DataService.generateData();
				setData(generatedData);
				const results = FilterService.filterData(generatedData, searchTerm);
				setFilteredData(results);
				setLoading(false);
			}, 2000);
		};
		fetchData();
	}, [searchTerm]);

	return (
		<div className='results-page'>
			<main className='content'>
				{loading ? (
					<p>Loading...</p>
				) : filteredData.length === 0 ? (
					<p>No results found.</p>
				) : (
					<ul className='results-list'>
						{filteredData.map((item) => (
							<li
								key={item.id}
								className='result-item'>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<img
									src={item.image}
									alt={item.title}
								/>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'>
									Learn more
								</a>
							</li>
						))}
					</ul>
				)}
			</main>
		</div>
	);
};

export default ResultsPage;
