import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/general/Header'

function Layout({children}) {
	const wrapperdComponentStyle = {
		container: 'container py-4 text-xl max-w-5xl m-auto'
	}

	return (
		<>
			<Header />
			<div className={wrapperdComponentStyle.container}>
				{children ? children : <Outlet />}
			</div>
			<footer>This is Footer baby)</footer>
		</>
	)
}

export default Layout
