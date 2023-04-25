import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authorized } from '../../store/reducers/authSlice'
import { setUserLogin } from '../../utils/cookies'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function SignInForm() {
  const formStyle = {
    container: 'w-72 p-5 shadow-lg',
		form: 'min-w-full flex flex-col',
    email: 'border border-gray-400 mb-3 p-1 rounded text-sm',
    password: 'border border-gray-400 mb-3 p-1 rounded text-sm',
    submit: 'rounded-full bg-blue-500 px-3 py-1 self-center text-white text-base'
  }

	const dispatch = useDispatch()
	const navigate = useNavigate()

  const signinUser = async (data) => {
		console.log(data)
		const {username, password} = data
		axios.post('http://localhost:5000/auth/login', {
			username,
			password
		}).then(() => {
			dispatch(authorized())
			setUserLogin()
			navigate('/todo')
		})
  }

	const {register, handleSubmit} = useForm()

  return (
    <div className={formStyle.container}>
      <form className={formStyle.form} onSubmit={handleSubmit(signinUser)}>
        <input {...register('username', {required: true})} type='text' placeholder='User name' className={formStyle.email} />
        <input {...register('password', {required: true})} type='password' placeholder='Password' className={formStyle.password} />
        <button type='submit' className={formStyle.submit}>Signin</button>
      </form> 
    </div>
  )
}

export default SignInForm
