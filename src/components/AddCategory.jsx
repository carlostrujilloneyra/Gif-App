import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = ({target}) => {
		setInputValue(target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length < 2) return;

		// // Modificando el state...
		// setCategories((categories) => [...categories, inputValue]);

		onNewCategory(inputValue.trim());

		setInputValue('');
	}

  return (
	  <form onSubmit={onSubmit}>
		  <input
			  type="text"
			  placeholder="Buscar gifs"
			  value={inputValue}
			  onChange={handleInputChange}
		  />
	  </form>
  )
}

