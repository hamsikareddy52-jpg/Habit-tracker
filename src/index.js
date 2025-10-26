import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<BrowserRouter
		future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true
		}}
	>
		<App />
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <p>This is a small feature added for Git testing.</p>
    </div>
  );
}

export default App;
