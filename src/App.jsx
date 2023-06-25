import './App.css'
import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import './style.scss'

function App() {
    return (
        <>
            <div className="main-wrapper">
                <Navbar />
                <div className="wrapper">
                    <Header />
                    <Main />
                </div>
            </div>
        </>
    )
}

export default App
