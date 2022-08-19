import logo from './logo.svg';
import './App.css';
import DashboardContent from "./components/layout/layout";
import {Provider} from "react-redux";
import store from "./redux/store";

import ReportLayout from "./components/layout/Report/ReportLayout";
import UserHomePage from "./pages/UserHomePage/UserHomePage";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UserHomePage/>
            </div>
        </Provider>
    );
}

export default App;
