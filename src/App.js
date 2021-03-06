import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mail from './components/Mail/index';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Sidebar from './components/Sidebar';
import { selectUser, login } from './features/userSlice';
import Login from './components/Login';
import { onAuthStateChanged, auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
	const user = useSelector(selectUser);
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// user is signed in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			} else {
				// user is signed out
			}
		});
	}, []);

	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="app">
					<Header />
					<div className="app__body">
						<Sidebar />
						<Routes>
							<Route path="/mail" element={<Mail />} />
							<Route path="/" element={<EmailList />} />
						</Routes>
					</div>

					{sendMessageIsOpen && <SendMail />}
				</div>
			)}
		</Router>
	);
}

export default App;
