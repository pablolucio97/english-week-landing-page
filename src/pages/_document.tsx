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
                    {/* @ts-ignore */}
                    <meta charset="UTF-8"/>
                    <meta name="description" content="Landing pages de alta conversão" />
                    <meta name="keywords" content="pablosilvadev pablo silva psd landing pages " />
                    <meta name='author' content='Pablo Silva' />
                    <meta name="theme-color" content="#4658f5" />
                    <link rel="preload" as="font"></link>
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