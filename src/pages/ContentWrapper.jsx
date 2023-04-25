import React from 'react'
import Header from '../components/general/Header'

export default (WrappedComponent) => {
	function NewComponent({ ...props }) {
		const wrapperdComponentStyle = {
			container: 'container py-4 text-xl max-w-5xl m-auto'
		}

		return (
			<>
				<Header />
				<div className={wrapperdComponentStyle.container}>
					<WrappedComponent {...props} />
				</div>
			</>
		)
	}
	return NewComponent
}
