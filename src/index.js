import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound'
import SignUp from './pages/SignUp';
import { store } from './store/store';
import Todo from './pages/Todo';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

function protectedRouter({isAuth, redirectPath='/', Component}) {
		if(!isAuth) {
			return <Navigate path={redirectPath} replace/>
		}

		return function WrappedComponent() {
			<Component />
		}
}

function ProtectedRouter0({isAuth, children}) {
	if(!isAuth) {
		return <Navigate path='/' element={<Home />} />
	}

	return <Layout><Outlet/></Layout>
}



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRouter0 isAuth={true} />}>
					<Route index element={<Home />} />
					<Route path='signup' element={<SignUp />} />
					<Route path='todo' element={<Todo />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
