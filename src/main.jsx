import { createRoot } from 'react-dom/client'
import './index.css'
import TextInput from './components/TextInput'


const App = () => {
  return(
    <div className="flex flex-col items-center justify-center">
     Input Text
     <TextInput />
    </div>
  )
}
createRoot(document.getElementById('root')).render(
    <App />
)
