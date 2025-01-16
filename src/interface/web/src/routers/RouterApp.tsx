import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login.tsx';
import Home from '../pages/Home.tsx';

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
