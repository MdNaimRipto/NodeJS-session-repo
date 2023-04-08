import axios from 'axios';
import './App.css';

function App() {
  const setCookieFunction = async (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;

    try {
      const { data } = await axios.post("/setCookie", {
        email: email
      }, {
        // withCredentials: true
      })
      if (data.status === 201) {
        try {
          const { data } = await axios.get('/getCookie', {
            // withCredentials: true
          })
          console.log({ "response recived ": data })
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <form className='simple-form' onSubmit={setCookieFunction}>
        <input type="email" name="email" placeholder='Email' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
