import React from "react";

export default function NewData() {
  return (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-7">
            <div className="coronata_img text_align_center">
              <figure>
                <img src="images/corona.png" alt="#" />
              </figure>
            </div>
          </div>
          <div className="col-md-5 oder1">
            <div className="titlepage text_align_left">
              <h2>Coronavirus what it is?</h2>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as
                opposed to using
              </p>
              <a className="read_more" href="coronata.html">
                About More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
