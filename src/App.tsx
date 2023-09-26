import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
	return (
		<div className="h-screen w-screen flex flex-col">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
