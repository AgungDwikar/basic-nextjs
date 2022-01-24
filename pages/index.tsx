import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <Layout pageTitle="home-page">
                <div className={styles["jumbotron"]}>
                    {/* <Image src="/user.jpg" width={200} height={200} alt="user" className={styles.image}/> */}
                    <h1 className={styles["title-homepage"]}>
                        Welcome to my blog
                    </h1>
                    <div className={styles["btn-wrap"]}>
                        <button
                            className={styles["btn-home"]}
                            onClick={() => router.push("/blog")}
                        >
                            go to blog
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Home;
