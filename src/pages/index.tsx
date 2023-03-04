import {TableBody} from "@/components/pages/main/table-body/table-body";
import {TableHead} from "@/components/pages/main/table-head/table-head";
import {TableWrapper} from "@/styles/style";
import Head from "next/head";
import useCoinList from "@/hooks/use-coin-list";


const Home = () => {
    const {data,isLoading} = useCoinList()

    return (
        <TableWrapper width={'1200'}>
            <Head>
                <title>Coins list</title>
            </Head>
            <TableHead/>
            <TableBody rows={data?.data} isLoading={isLoading}/>
        </TableWrapper>
    );
}

export default Home