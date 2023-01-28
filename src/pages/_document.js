import { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Analytics />
            <Head/>
            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}