function Button() {
    const onClickHandle = () => {
        console.log('Click Me Already !!!')
    }
    return (
        <button onClick={() => { onClickHandle() }}>
            Click Me!
        </button>
    )
}

function App() {
    return (
        <div>
            Welcome to React With JSX
            <Button />
        </div>
    )
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle)

root.render(<App />)