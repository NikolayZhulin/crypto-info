import Head from 'next/head'

type Props = {
  title: string
  description: string
}

export const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={description} />
    </Head>
  )
}
