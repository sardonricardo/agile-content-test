import styles from "./card.module.css";

interface CardProps {
	item: {
		title: string;
		description: string;
		url: string;
		image: string;
	};
}

const Card: React.FC<CardProps> = ({ item }) => {
	return (
		<div className={styles.result_details}>
			<img
				src={item.image}
				alt={item.title}
				className={styles.result_image}
			/>
			<a
				href={item.url}
				target='_blank'
				rel='noopener noreferrer'>
				{item.url}
			</a>
			<h2>{item.title}</h2>
			<p>{item.description}</p>
		</div>
	);
};

export default Card;
