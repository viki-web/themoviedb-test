import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="/assets/css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css"/>
                    <link href="/assets/css/bootstrap-grid.min.css" rel="stylesheet" type="text/css"/>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
                    <link href="/assets/css/style.css" rel="stylesheet" type="text/css"/>
                    
                </Head>
                <body>
                <Main />

                <NextScript />

                {/* here all footer scripts should be added */}

                </body>
            </Html>
        )
    }
}

export default MyDocument