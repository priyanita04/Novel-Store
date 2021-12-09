import Head from 'next/head'
import Header from "../../comp/Header";
import axios from 'axios';
import {Button} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';




const Dashboard = () => {
    const router = useRouter();

    const [list, setList] = useState([{}])

    const showBookList = async() =>{
        try {

            await axios.get("http://localhost:9002/home/dashboard")
            .then((response)=>{
                const listofitems = response.data.book;
                setList(
                    listofitems.map((curr)=>{
                        console.log(curr)
                        return curr
                    })
                )


                console.log("fetched data from backend")

            })
            .catch(()=>{
                console.log("error occure")
            })
            // console.log(list);

        } catch (error) {
            console.log(error)
        }



    }


    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if(!userInfo)
        {
          router.push('/login')
        }

      })

    return (
        <>
            <Head>
                <title>Novel Store | Dashboard</title>
            </Head>
            <Header />

            <h2>List of books available</h2>
            <input  type="submit" name="show" value="show" onClick={showBookList}/>
            <br/>
            <br/>
            <hr />

            {
                list.map((curr)=>{
                    return(
                    <div class="list-group" key={curr._id}>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{curr.bookName} - Price - {curr.price}</h5>
                            <small>Rent/Sell</small>
                        </div>
                        <p class="mb-1">{curr.detail}</p>
                        <small>{curr.address}</small>
                    </a>
                    <hr />

                    </div>
                    )
                })
            }







        </>
    );
}

export default Dashboard;