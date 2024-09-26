// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initial) => {
	const [values, setValues] = useState(initial);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, handleChanges];
};

export default useForm;
