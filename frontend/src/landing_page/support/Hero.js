import React from "react";

function Hero() {
  return (
    <section className="container-fluid text-left " id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>

      <div className="row m-5">
        <div className="col-lg-7 col-sm-12">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-3" placeholder="Eg. how do I activate F&O, why is my order getting rejected."></input><br></br>
          <a href="" style={{color:"white"}} className="fs-5">Track account opening</a>&nbsp; 
          <a  href="" style={{color:"white"}} className="fs-5">Track segment activation</a>&nbsp; 
          <a  href="" style={{color:"white"}} className="fs-5">Intraday <br></br>margins</a>&nbsp; 
          <a  href="" style={{color:"white"}} className="fs-5">Kite user manual</a>
        </div>
        <div className="col-lg-5 col-sm-12">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ color: "white" }}>
                Offer for sale (OFS) - November 2024
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Surveillance measure on scrips - November 2024
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
