import React from "react";

export const Card = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-12">
          <div className="card h-100 w-100 mx-lg-auto">
            <div className="ratio ratio-16x9">
              <img
                src="https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg"
                className="card-img-top object-fit-cover w-100 h-100"
                alt="Colorful tulips"
              />
            </div>
            <div className="card-body d-flex flex-column p-4 text-start">
              <h5 className="card-title fs-3">Card title</h5>
              <p className="card-text flex-grow-1 fs-5 text-muted">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary mt-auto align-self-start px-4">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};