import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from "@/components/layout/layout";
import '../styles/var.css'

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}

export default App