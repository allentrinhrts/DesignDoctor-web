import { Avatar, Dropdown } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSignOut() {
    try {
      dispatch({ type: 'auth/setIsLoggedIn', payload: false })
      navigate('/login', { replace: true })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="w-full rounded bg-teal-600 py-4 px-3 dark:bg-gray-800 flex justify-between">
      <Link to="/" className="flex gap-2 items-center">
        <div className="w-12">
          <Logo />
        </div>
        <span className="text-xl uppercase tracking-wide font-bold text-gray-50">Design Doctor</span>
      </Link>
      <Dropdown
        label={<Avatar img="https://randomuser.me/api/portraits/women/57.jpg" alt="User Settings" rounded bordered />}
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Header
