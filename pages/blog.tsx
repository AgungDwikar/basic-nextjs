// react from ract sudah di handle

import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css"

interface Posts {
  id : number;
  title : string;
  body : string;
}
interface dataProps {
    dataBlogs: Posts[];
}
export default function blog(props: dataProps) {
  // destukturing
    const { dataBlogs } = props;

    return (
        <Layout pageTitle="user page">
            {/* mapping atau looping menggunakan map */}
            {dataBlogs.map((blog) => {
                return (
                    <div key={blog.id} className={styles.card}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                );
            })}
        </Layout>
    );
}

// get server agar datanya dinamis
export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataBlogs = await res.json();
    return {
        props: {
            dataBlogs,
        },
    };
}
