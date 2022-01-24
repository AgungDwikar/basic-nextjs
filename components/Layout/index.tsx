import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    // extract children
    const { children, pageTitle } = props;

    return (
        <>
            <Head>
                <title>NextBasic | {pageTitle}</title>
                <meta name="description" content="website nextjs basic"></meta>
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
