import Footer from './Footer';
import Header from './Header';
import RouterApp from '../../routers/RouterApp';

import { Button } from '../../shadui/components/ui/button';

export default function Structure() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			<div>
				<RouterApp />
			</div>

			<Button variant="outline">Button</Button>

			<Footer />
		</div>
	);
}
