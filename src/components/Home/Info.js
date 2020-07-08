import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              ut. Quia vitae deleniti ea culpa distinctio est debitis,
              reprehenderit doloremque quasi earum quo consequuntur nesciunt
              provident eaque atque sit minus voluptates, accusantium
              recusandae. Ullam aperiam minima laudantium quis. Vero libero
              similique quos nemo ullam sed corrupti, dicta exercitationem
              dolorem incidunt illo dolore voluptatibus ab obcaecati veniam
              eaque cum quibusdam rerum quidem ea officiis repudiandae ad
              eveniet. Ipsum itaque repellat eos maiores at ab voluptas
              sapiente, laboriosam cupiditate illum! Nesciunt debitis vitae in,
              architecto facere dolorem impedit aut fugit, quae minus iste
              consequuntur. Modi cupiditate quaerat, recusandae omnis vel optio
              eaque.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-green">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
