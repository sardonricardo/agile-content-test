import React from "react";
import styles from "./list-item.module.css";

interface ListItemProps {
	item: {
		id: number;
		title: string;
		description: string;
		url: string;
		image: string;
	};
	onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onClick }) => {
	return (
		<li
			className={styles.result_item}
			onClick={onClick}>
			<a
				href={item.url}
				target='_blank'
				rel='noopener noreferrer'>
				{item.url}
			</a>
			<h2>{item.title}</h2>
			<p>{item.description}</p>
		</li>
	);
};

export default ListItem;
