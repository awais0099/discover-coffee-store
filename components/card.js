import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export default function Card(props) {
    return(
        <Link href={props.href} className={styles.carL}>
            <div className={`${styles.container} glass`}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{props.name}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    <Image
                        className={styles.cardImage}
                        src={props.imageUrl}
                        width={260}
                        height={160}
                        alt="store image"
                    />
                </div>
            </div>
        </Link>
    );
}