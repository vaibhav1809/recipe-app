import React, { useState } from 'react';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === 'user' && password === 'password') {
			window.location.href = '/home';
		} else {
			setError('Invalid username or password');
		}
	};

	// User is not logged in, render the login form
	return (
		<div className="mt-5 d-flex flex-column vh-100">
			<div className="form container text-center mt-5 mb-5 p-5 border border-dark rounded bg-light shadow rounded mx-auto w-75">
				<h1 className="text-center mb-3">Log in</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="UserName"
						className="mt-1 form-control mx-auto"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						className="mt-1 form-control mx-auto"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<input
						type="submit"
						value="Sign In"
						className="btn btn-success btn-lg btn-block"
					/>
				</form>
				{error && <p className="text-danger">{error}</p>}
			</div>
		</div>
	);
}
