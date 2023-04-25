import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

function NewTodoForm({ togglePopup }) {

	const newTodoStyle = {
		form: 'flex flex-col rounded py-12 px-8 lg:w-4/12 sm:w-6/12 bg-white relative',
		label: 'text-xs absolute bg-white -top-2 left-2 leading-3 px-1',
		focusContainer: 'relative border rounded mb-5 focus-within:border-blue-700 focus-within:border focus-within:shadow-radioField',
		focusContainerP2: 'relative border rounded mb-5 p-2 focus-within:border-blue-700 focus-within:border focus-within:shadow-radioField',
		titleField: 'w-full block p-2 rounded focus-visible:outline-none',
		radioField: 'mr-2 cursor-pointer',
		radioLabel: 'mr-3 cursor-pointer',
		fileUploadButton: 'w-full block outline-none focus:outline-none focus-visible:outline-none',
		fileUploadText: 'w-full block outline-none focus:outline-none focus-visible:outline-none text-ellipsis whitespace-nowrap overflow-hidden',
		submitButton: 'rounded-full bg-sky-700 p-2 text-white uppercase',
		closeButton: 'absolute top-2 right-2'
	}

	const defaultText = 'Attach the file'
	const refInputFile = useRef(null)
	const [inputFileText, setinputFileText] = useState(defaultText)
	const { register, handleSubmit, formState: { errors } } = useForm()

	const handleButtonEvent = (e) => {
		if (e.code === 'Enter' || e.code === 'Space') {
			const input = refInputFile.current
			input.click()
			// refInputFile.current.innerText('Some text')
		}
	}

	console.log(errors)

	const handleAttachFileEvent = (e) => {
		const text = e.target.value
		setinputFileText(text)
	}

	const submitTodoForm = (data) => {
		// console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(submitTodoForm)} className={newTodoStyle.form}>
			<div className={newTodoStyle.focusContainer + ' ' + (errors.title && 'border-red-500')}>
				<label className={newTodoStyle.label} htmlFor='title'>Todo title *</label>
				<input
					type='text'
					placeholder='Set tile'
					id='title'
					className={newTodoStyle.titleField}
					{...register('title', { required: 'This is required' })}
				/>
			</div>
			{errors.title && <span className={newTodoStyle.errorText}>{errors.title?.message}</span>}

			<div className={newTodoStyle.focusContainerP2} tabIndex={0}>
				<span className={newTodoStyle.label}>Type</span>
				<input className={newTodoStyle.radioField} type='radio' {...register('type')} id='note' value='note' checked />
				<label className={newTodoStyle.radioLabel} htmlFor='note'>Note</label>
				<input className={newTodoStyle.radioField} type='radio' {...register('type')} id='reminder' value='reminder' />
				<label className={newTodoStyle.radioLabel} htmlFor='reminder'>Reminder</label>
			</div>	

			<div className={newTodoStyle.focusContainerP2}>
				<span className={newTodoStyle.label}>Here you can attach some file</span>
				<button className={newTodoStyle.fileUploadButton} type='button' onKeyDown={handleButtonEvent}>
					<label className={newTodoStyle.fileUploadText} htmlFor='file-upload'>{inputFileText || defaultText}</label>
					<input type='file' {...register('file')} id='file-upload' ref={refInputFile} hidden onChange={handleAttachFileEvent} />
				</button>
			</div>
			<button type='submit' className={newTodoStyle.submitButton}>Add todo</button>
			<button type='button' className={newTodoStyle.closeButton} onClick={togglePopup}>close</button>
		</form>
	)
}

export default NewTodoForm
