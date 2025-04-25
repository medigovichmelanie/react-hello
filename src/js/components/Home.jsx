import React from "react";
import {Navbar} from "./Navbar"
import {Jumbotron} from "./Jumbotron"
import {Card} from "./Card"
import {Footer} from "./Footer"

const Home = () => {
  return (
    <div className="text-center">
      <Navbar/>
      <Jumbotron/>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="h-100 d-flex flex-column">
              <Card/>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="h-100 d-flex flex-column">
              <Card/>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="h-100 d-flex flex-column">
              <Card/>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="h-100 d-flex flex-column">
              <Card/>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default Home;