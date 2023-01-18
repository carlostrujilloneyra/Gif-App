import { useEffect, useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

	// Usaremos un hook
	const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2 className="subtitle-center">{category}</h2>
		  {
			  isLoading && (<h3>Cargando...</h3>)
		  }

      <div className="grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};


