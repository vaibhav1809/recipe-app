import React from 'react';

import Footer from './Footer.tsx';
import Header from './Header.tsx';
import RouterApp from '../../routers/RouterApp.tsx';

export default function Structure() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			<div>
				<RouterApp />
			</div>
			<Footer />
		</div>
	);
}
