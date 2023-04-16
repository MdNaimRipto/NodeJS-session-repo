import axios from 'axios';
import './App.css';

function App() {
  const setCookieFunction = async (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { data } = await axios.post("/setCookie", {
        email: email,
        password: password
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
        <input type="password" name="password" placeholder='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
