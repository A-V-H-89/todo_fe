import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { authorized } from '../../store/reducers/authSlice'
import { useDispatch } from 'react-redux'
import { setUserLogin } from '../../utils/cookies'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// const {
// 	register,
// 	handleSubmit
// } = useForm()


function SignUp() {
	const formStyle = {
		container: 'max-w-sm flex flex-col p-5 shadow-lg',
		userName: 'border-2 border-blue-500 mb-3 p-1 rounded',
		email: 'border-2 border-blue-500 mb-3 p-1 rounded',
		password: 'border-2 border-yellow-500 mb-3 p-1 rounded',
		submit: 'rounded-full bg-lime-500 px-3 py-1 self-center',
		checkboxContainer: 'mb-2',
		checkbox: 'mr-2'
	}

	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [termsCheckbox, setTermsCheckbox] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmitForm = async (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/auth/registration', {
			username: userName,
			email,
			password
		})
			.then(() => {
				dispatch(authorized())
				setUserLogin()
				navigate('/')
			})
	}

	return (
		<>
			<form className={formStyle.container}>
				<input type='text' placeholder='User name' required className={formStyle.userName} value={userName} onChange={e => setUserName(e.target.value)} />
				<input type='text' placeholder='Email' required className={formStyle.email} value={email} onChange={e => setEmail(e.target.value)} />
				<input type='password' placeholder='Password' required className={formStyle.password} value={password} onChange={e => setPassword(e.target.value)} />
				<label className={formStyle.checkboxContainer}>
					<input type='checkbox' required value={termsCheckbox} onChange={e => setTermsCheckbox(!termsCheckbox)} className={formStyle.checkbox} />
					Are you agree with Privacy Policy and Terms of Usage of ToDo portal
				</label>
				<button type='submit' disabled={!termsCheckbox} className={formStyle.submit + (!termsCheckbox ? ' disabled:opacity-25' : '')} onClick={e => handleSubmitForm(e)}>Register</button>
			</form>
		</>
	)
}

export default SignUp
