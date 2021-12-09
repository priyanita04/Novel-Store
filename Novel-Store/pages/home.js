import React, { useEffect } from 'react'
import Header from '../comp/Header'
import {Button} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'


function home() {
  const router = useRouter();

  const getHome = ()=>{
    const userIn = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(userIn);
    const token = userInfo.token

    const config = {
      headers:{
        "Content-type" : "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      }
    }

    axios.post("http://localhost:9002/home", {token}, config)
    .then((response)=>{
      console.log(response.data)
      console.log("fetched data from backend")
    })
    .catch(()=>{
      console.log("error occure")
    })
  }

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if(!userInfo)
    {
      router.push('/login')
    }
    else{
      getHome();
    }
  })

  return (
    <div>
      <Header/>
      <Link href="/createbook"><a><Button variant="primary" >Create a book</Button></a></Link>
      <hr/>
      <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <hr/>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <hr/>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
    </div>
  )
}

export default home
