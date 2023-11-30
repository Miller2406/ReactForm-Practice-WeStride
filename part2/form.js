function ReactBasicForm({ dataSubmit }) {
    return (
        <form id='form' onSubmit={dataSubmit}>
            <div className='form_field'>
                <label>FirstName :</label>
                <input type="text" name='firstName' />
            </div>
            <div className='form_field'>
                <label>LastName :</label>
                <input type="text" name='lastName' />
            </div>
            <div className='form_submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

function App() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formValue = {};

        for (const [name, value] of formData) {
            formValue = {
                ...formValue,
                [name]: value,
            }
        }
        const fullName = `${formValue.firstName}  ${formValue.lastName}`
        alert(`Helo Khun ${fullName}`)
    }


    return (
        <div>
            <ReactBasicForm dataSubmit={handleOnSubmit} />
        </div>
    )
}

// Create root element
const rootEle = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEle);

root.render(<App />)