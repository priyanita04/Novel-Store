import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Router, useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    //redirecting to the home page after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 3000)
    }, [])
    return (
        <>
            <Head>
                <title>Novel Store | 404</title>
            </Head>
            <div className="not_found">
                <h1>Ooooops...</h1>
                <h2>The page cannot be found</h2>
                <p>Go back to the <Link href="/home"><a>Homepage</a></Link></p>

            </div>
        </>
    );
}

export default NotFound;