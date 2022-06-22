import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="react components" />
                    <meta name="keywords" content="react components " />
                    <meta name='author' content='react components' />
                    <meta name='author' content='react components' />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Nunito:wght@300;500;800&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}