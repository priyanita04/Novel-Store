import React from "react";
import Footer from '../comp/Footer/Footer'
import UserCard from '../comp/UserCard/UserCard'

function profile() {
    return (
        <div>
            <div className="App">
      <div className="container">
      <header className="clearfix mt-4">
        <h1>ReactJs Users Cards</h1>
      </header>
        <UserCard />
        <Footer />
      </div>
    </div>
        </div>
    )
}

export default profile

