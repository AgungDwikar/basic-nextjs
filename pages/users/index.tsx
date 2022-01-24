import { json } from "stream/consumers";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";

interface UserProps {
    dataUsers: Array<any>;
}
export default function User(props: UserProps) {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="user page">
            {/* mapping atau looping menggunakan map */}
            {dataUsers.map((user) => {
                return (
                    <div
                        key={user.id}
                        onClick={() => router.push(`/users/${user.id}`)}
                        className={styles.card}
                    >
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}
