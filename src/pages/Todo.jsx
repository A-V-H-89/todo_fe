import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import NewTodoForm from '../components/forms/NewTodoForm'

function Todo() {
	const stylesTodoPage = {
		button: 'rounded-full border bg-green-500 text-white p-2',
		addNewItemPopup: 'flex justify-center fixed left-0 right-0 top-0 bottom-0 bg-backgroundPopup items-center',
		label: 'border border-black-800 rounded-sm'
	}

	const [todoList, setTodoList] = useState([])
	const [isOpenPopup, setIsOpenPopup] = useState(false)


	useEffect(() => {
		//call API to fetch all todo items
		//render all items
	}, [])

	const addTodoItem = () => {

	}

	const togglePopup = () => {
		setIsOpenPopup(!isOpenPopup)
	}

	const {register, handleSubmit} = useForm()

	const submitTodoForm = (data) => {
		console.log({...data})
		axios.post('http://localhost:5000/todoItem', {
			...data
		}).then(() => {
			//dispatch data in new list of todos
		}).catch((e) => {
			console.log(toString(e))
		})
	}

	return (
		<div>
			<button className={stylesTodoPage.button} onClick={togglePopup} >Add new Todo item</button>
			{isOpenPopup && <div className={stylesTodoPage.addNewItemPopup}>
				<NewTodoForm  togglePopup={() => setIsOpenPopup(!isOpenPopup)}/>
			</div>}
		</div>
	)
}

export default Todo
