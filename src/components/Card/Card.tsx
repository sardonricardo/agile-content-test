import styles from "./card.module.css";

interface CardProps {
	item: {
		title: string;
		description: string;
		url: string;
		image: string;
	};
	onClose?: () => void;
}

const Card: React.FC<CardProps> = ({ item, onClose }) => {
	const isModal = !!onClose;
	return (
		<div className={`${styles.result_details} ${isModal ? styles.modal : ""}`}>
			{/* {onClose && (
				<button
					onClick={onClose}
					className={styles.close_button}>
					X
				</button>
			)} */}
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
