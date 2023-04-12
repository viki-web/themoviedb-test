import App from 'next/app';
import React from "react";
import {Provider} from 'react-redux';
import { store } from 'redux';
import Head from 'next/head';
import MainLayout from '../layouts/main.layout';

const Layout = ({children, props})=>{
    return(
        <MainLayout {...props}>{children}</MainLayout>
    )
}

class Application extends App {

    render() {
        const {Component, pageProps} = this.props;
        return (
            <React.Fragment>
             
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <title>MovieDB</title>
                </Head>

                <Layout {...pageProps}>
                    <Component {...pageProps}/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Application
