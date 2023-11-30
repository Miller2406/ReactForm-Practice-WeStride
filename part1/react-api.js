function btnEle() {
    const btnProps = {
        onClick: () => {
            console.log('click me already!')
        }
    }
    return React.createElement('button', btnProps, [
        'Click me!'
    ])
}

function app() {
    return React.createElement('div', {}, [
        'Welcome to React With API',
        'myname is Miller',
        btnEle()
    ])
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle)

root.render(app())