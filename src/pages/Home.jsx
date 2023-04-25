import React from 'react'
import { useSelector } from 'react-redux'
import SignInForm from '../components/forms/SignInForm'
import { getUserLoginCookie } from '../utils/cookies'

function Comp({is, hjk, asd}) {
	console.log(hjk)
}

function Home() {
	const homePageStyle = {
		container: 'flex justify-between',
		banner: 'font-bold pr-2',
		header: 'font-bold text-5xl',
		list: 'mt-4'
	}

	const isAuth = useSelector(state => state.auth.authState) || getUserLoginCookie()

	return (
		<div className={homePageStyle.container}>
			<div className={homePageStyle.banner}>
				<h2 className={homePageStyle.header + ' text-blue-500'}>Talk openly</h2>
				<h2 className={homePageStyle.header + ' text-yellow-500'}>Develop openly</h2>
				<ul className={homePageStyle.list}>
					<li>1. Create your own account with special permissions and perks</li>
					<li>2. Manage your time effectively with our application</li>
				</ul>
			</div>
			{!isAuth && <SignInForm />}
			<Comp auth={true} someProps={false} oneMore={true} hjk={true}>Some text</Comp>
		</div>
	)
}

export default Home
