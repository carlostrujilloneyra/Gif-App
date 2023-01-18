
export const GifItem = ({ title, url }) => {


	return (
	// No es recomendable aplicar estilos así, pero como es práctica, se omite
	  <div style={{ boxShadow: '4px 4px 8px #8d99ae', borderRadius: 10 }}>
		  <img
			  className="image-gif"
			  src={url}
			  alt={title}
		  />
		  <h3>{ title }</h3>
	  </div>
  )
}

// export default GifItem; Esta es otra forma de exportar, pero mejor ta la de arriba 