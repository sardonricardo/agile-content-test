import styles from "./footer.module.css";
const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; Google 2021</p>
			<p>version: 0.1.0</p>
		</footer>
	);
};

export default Footer;
