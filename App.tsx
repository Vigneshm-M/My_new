import AuthLoadingScreen from "./source/navigation/AuthLoading";
import { Provider } from "react-redux";
import { store } from "./source/store/store";

const App = () => {

	return (
		<Provider store={store}>
			<AuthLoadingScreen />
		</Provider>
	);
}

export default App;
