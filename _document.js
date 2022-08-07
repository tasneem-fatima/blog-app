import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                    <script src="/bundle.js"></script>
                </body>

            </Html>
        )
    }
}
export default MyDocument;