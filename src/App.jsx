import './App.css'
import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import './style.scss'

function App() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Navbar />
                <div style={{ flex: '1 1 85%' }}>
                    <Header />
                    <Main />
                </div>
            </div>
        </>
    )
}

export default App
