import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="h-full bg-gray-100">
                <Head />
                <body className="h-full">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
