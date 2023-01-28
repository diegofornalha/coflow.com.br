import { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../comp'

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head />
            <body>
                <Main />
                <Analytics/>
                <NextScript />
            </body>
        </Html>
    )
}