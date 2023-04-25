import React, { useState } from 'react'
import SignUpForm from '../components/forms/SignUpForm'

function SignUp() {
	const signUpPageStyle = {
		header: 'font-bold text-2xl mb-2',
		subHeader: 'text-sm'
	}

	return (
		<>
			<h2 className={signUpPageStyle.header}>If you want to continue with us please register for free!</h2>
			<p className={signUpPageStyle.subHeader}>Please fill this form:</p>
			<SignUpForm />
		</>
	)
}

export default SignUp
