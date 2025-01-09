import styles from "./list-item.module.css";

interface ListItemProps {
	item: {
		id: number;
		title: string;
		description: string;
		url: string;
		// image: string;
	};
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
	return (
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
	);
};

export default ListItem;
