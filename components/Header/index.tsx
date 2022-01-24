import Link from "next/link";
import styles from "./header.module.css";

export default function index() {
    return (
        <header className={styles.container}>
                <li className={styles.logo}>
                        <Link href="/">
                            <a>BlogMe</a>
                        </Link>
                    </li>
            <div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/blog">
                            <a>blog</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/users">
                            <a>users</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
