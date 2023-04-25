import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { unAuthorized } from '../../store/reducers/authSlice'
import { getUserLoginCookie, removeUserLoginCookie } from '../../utils/cookies'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'

function Header() {
	const headerStyle = {
		general: 'after:w-full after:h-px after:bg-gray-500 relative after:absolute after:bottom-0',
		container: 'flex w-full justify-between items-center container max-w-5xl',
		head: 'font-bold text-2xl',
		links: '',
		link: 'text-blue-500 ml-2 font-bold border border-blue-500 rounded-full p-2'
	}

	const isAuth = useSelector(state => state.auth.authState) || getUserLoginCookie()
	const dispatch = useDispatch()
	const hanldeLogOut = () => {
		dispatch(unAuthorized())
		removeUserLoginCookie()
	}

	return (
		<div className={headerStyle.general}>
			<div className={headerStyle.container}>
				<Link to='/'>
					<Logo />
				</Link>
				<h1 className={headerStyle.head}>Stand with Ukraine 🇺🇦</h1>
				<nav className={headerStyle.links}>
					{!isAuth && <Link to='/signup' className={headerStyle.link}>Signup</Link>}
					{isAuth && (
						<>
							<Link to='/todo' className={headerStyle.link}>Todo list</Link>
							<Link to='/' className={headerStyle.link} onClick={hanldeLogOut}>Logout</Link>
						</>
					)}
				</nav>
			</div>
		</div>
	)
}

export default Header
