import React, { useState } from 'react';

import Login from './components/Login/Login';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true);
	};
	return (
		<React.Fragment>
			<Login onLogin={loginHandler} />;
		</React.Fragment>
	);
};

export default App;
