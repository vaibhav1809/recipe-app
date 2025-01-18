import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

export default function RouterApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Navigate to="/login" />} />

				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
