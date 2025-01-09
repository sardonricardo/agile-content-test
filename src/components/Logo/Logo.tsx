import React from "react";
import styles from "./logo.module.css";

interface LogoProps {
	size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ size }) => {
	return (
		<div
			className={styles.logo}
			style={{
				margin: 0,
				fontSize:
					size === "small" ? "1.5rem" : size === "medium" ? "2rem" : "3rem",
			}}>
			<span className={styles.blue}>G</span>
			<span className={styles.red}>o</span>
			<span className={styles.yellow}>o</span>
			<span className={styles.blue}>g</span>
			<span className={styles.green}>l</span>
			<span className={styles.red}>e</span>
		</div>
	);
};

export default Logo;
