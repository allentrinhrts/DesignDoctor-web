import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { Button, Label, TextInput } from 'flowbite-react'

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
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
        <h1 className="text-3xl font-bold mb-4 text-center">Forgot password</h1>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="example@allentrinh.com" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
          <div className="flex justify-center">
            <Link to="/login" className="text-slate-500 hover:underline text-sm">
              Go back to login
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword
