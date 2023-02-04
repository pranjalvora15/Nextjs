import Footer from "@/Components/Footer"
import Head from 'next/head'

export default function AboutPage(){
    return <>
    <Head>
        <title>About Page</title>
        <meta name='description' content='This is about page'/>
    </Head>
        <h2>About Page</h2>
    </>
}

AboutPage.getLayout = function(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}