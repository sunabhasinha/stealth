import './App.css';
import Homepage from './components/Homepage';
import { LoaderProvider } from './context/LoaderContext';

function App() {
	return (
		<div className="font-poppins relative">
			<LoaderProvider>
				<Homepage />
			</LoaderProvider>
		</div>
	);
}

export default App;
