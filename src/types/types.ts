export type ResponseType<D> = {
    data: D
    meta: {
        count: number
    }
    status: StatusType
}

export type CoinType = {
    id: number;
    rank: number;
    slug: string;
    name: string;
    symbol: string;
    category: string;
    type: string;
    volume24hBase: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
    images: any;
    values: CoinListValuesType;
    lastUpdated: Date;
    links: any[];
    tokens: any[];
}

type StatusType = {
    code: number
    creditsCost: number
    message: string
    responseTime: number
    success: boolean
    time: string
}

type CoinListValuesType = {
    USD: {
        high24h: number
        low24h: number
        marketCap: number
        percentChange3m: number
        percentChange6m: number
        percentChange7d: number
        percentChange24h: number
        percentChange30d: number
        price: number
        volume24h: number
    }
    volume24hBase: number
}