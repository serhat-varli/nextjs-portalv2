import Head from 'next/head';
import Header from '../header/header';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Rick And Morty</title>
                <meta name="description" content="Your website description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main> 
        </>
    );
};

export default Layout;
