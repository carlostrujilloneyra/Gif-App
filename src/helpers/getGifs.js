
// Función que nos retorna los gifs de la API

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=O5vquR9jRPQGliFp43hxXvIKDqYiaV8R&q=${category}&limit=12`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) =>
    // Vas a devolver un objeto
    ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );

  return gifs;

};
