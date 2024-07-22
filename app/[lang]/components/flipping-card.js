import Image from "next/image";
import styles from "./flipping-card.module.scss";

const FlippingCard = ({
  title,
  description,
  stack,
  location,
  image,
	logo,
}) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<Image
					className={styles.image + ' scale-down'}
					src={image}
					alt=""
					fill
					placeholder="blur"
					sizes="(max-width: 768px) 100vw, 33vw"
				/>
				<div className={styles.logoContainer}>
					<Image
						src={logo}
						className={styles.logo}
						fill
						alt=""
						placeholder="blur"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				</div>

				<div className={styles.infoLayer}>
					<p className={styles.location}><Image alt="" className={styles.locationPin} height={10} width={10} src='/location-white.svg' /> {location}</p>
					<div className={styles.bottomContainer}>
						<h4 className={styles.title}>{title}</h4>
						<p className={styles.description}>{description}</p>
						<p className={styles.stack}>{stack}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlippingCard;
