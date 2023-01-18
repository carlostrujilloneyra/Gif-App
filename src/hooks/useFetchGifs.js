import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

	// Estados del hook!! Que te regresará algo luego!!
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setTimeout(() => {
			setImages(newImages);
			setIsLoading(false);
		}, 2500);
	}

	useEffect(() => {
		getImages();
	}, [])
	

	return {
		images,
		isLoading
	}
}

export default useFetchGifs