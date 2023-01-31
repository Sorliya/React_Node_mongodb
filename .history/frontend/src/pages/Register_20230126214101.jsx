import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
//useSelector can select sth from the state
//useDispatch can do async thunk function or reset function in our reducer
import {useNavigate} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import { toNamespacedPath } from 'node:path/win32'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })
  const {name,email,password,password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isError,isSuccess,isLoading,message} = useSelector((state) => state.auth)//from the auth state which is only gloabal state we have

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //want to dispatch our register
    if(password !== password2){
      toast.error('password do not match')
    }else{
      const userData = {name,email,password}
    }
  }

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser/>Register
        </h1>
        <p>please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" 
            className='form-control' 
            id='name' 
            name='name' 
            value={name} 
            placeholder="enter your name"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="email" 
            className='form-control' 
            id='email' 
            name='email' 
            value={email} 
            placeholder="enter your email"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" 
            className='form-control' 
            id='password' 
            name='password' 
            value={password} 
            placeholder="enter password"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" 
            className='form-control' 
            id='password2' 
            name='password2' 
            value={password2} 
            placeholder="confirm password"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register