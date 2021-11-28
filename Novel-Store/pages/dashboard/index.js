import Head from 'next/head'
import DashboardNavbar from "../../comp/DashboardNavbar";
import axios from 'axios';

// const showBookList = () =>{
//     console.log("heres the books")
//     axios.get("http://localhost:5000")
//     .then(res=>console.log(res))
// }

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Novel Store | Dashboard</title>
            </Head>
            <DashboardNavbar />

            <h2>List of books available</h2>
            {/* <input  type="submit" name="show" value="show" onClick={showBookList}/> */}
            <input  type="submit" name="show" value="show"/>


        </>
    );
}

export default Dashboard;