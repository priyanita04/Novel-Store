import Head from 'next/head'
import ProfileNavbar from "../comp/profileNavbar";

const profile = () => {
    return (
        <>
            <Head>
                <title>Novel Store | Profile</title>
            </Head>
            <ProfileNavbar />
        </>
    );
}

export default profile;