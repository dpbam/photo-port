import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";

function Gallery(props) {
  const { name, description } = props.currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={props.currentCategory.name} />
    </section>
  );
}

export default Gallery;
