import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      // TODO: add some real logic here
      const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
      const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
      console.log('email:', email)
      console.log('password:', password)
      dispatch({ type: 'auth/setIsLoggedIn', payload: true })
      navigate('/')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <div className="bg-slate-100 p-4 rounded-xl shadow-xl min-w-[480px]">
        <div className="w-32 flex justify-center mt-4 mb-6 m-auto">
          <Logo />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="example@allentrinh.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-slate-500 hover:underline text-sm">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
          <div className="flex justify-center">
            <Link to="/register" className="text-slate-500 hover:underline text-sm">
              New here? Register now
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
