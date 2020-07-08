import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
      <Link to="/about/">
        <button className="btn text-uppercase btn-green">Zum Shop</button>
      </Link>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
