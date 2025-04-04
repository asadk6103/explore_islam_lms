import { createRoot } from 'react-dom/client'
import './index.css'
import App from './layout'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import store from './store'


let persistor = persistStore(store);
const ExploreIslam = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

createRoot(document.getElementById('root')).render(
    <ExploreIslam />
)
