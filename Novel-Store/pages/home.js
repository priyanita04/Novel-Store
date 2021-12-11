import React, { useEffect, useState } from 'react'
import Header from '../comp/Header'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'


function home() {
  const router = useRouter();
  const [list, setList] = useState([{}])

  const getHome = async () => {
    try {
      const userIn = localStorage.getItem("userInfo");
      const userInfo = JSON.parse(userIn);
      const token = userInfo.token
      const id = userInfo.id

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        }
      }

      await axios.post("http://localhost:9002/home", { id, token }, config)   //userId
        .then((response) => {
          const listofitems = response.data.book;
          // console.log("pop", listofitems)
          setList(
            listofitems.map((curr) => {
              // console.log(curr)
              return curr
            })
          )
          // console.log("list is", list);
          // console.log("fetched data from backend")
        })
        .catch(() => {
          console.log("error occured")
        })

      // console.log("list is", list);
    } catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      router.push('/login')
    }
    else {
      getHome();
    }
  }, [])

  return (
    <div>
      <Header />
      <Link href="/createbook"><a><Button variant="primary" >Create a book</Button></a></Link>
      <hr />
      {
        list?.reverse().map((curr) => {
          return (
            <div class="list-group" key={curr._id}>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{curr.bookName}</h5>
                  <small>Rs {curr.price}</small>
                </div>
                <p class="mb-1">{curr.detail}</p>
                <small>{curr.address}</small>
              </a>
              <hr />


            </div>
          )
        })
      }
    </div>
  )
}

export default home
