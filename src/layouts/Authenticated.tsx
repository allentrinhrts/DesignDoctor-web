import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useNavigate } from 'react-router-dom'
import SidebarNavigation from '../components/SidebarNavigation'
import Header from '../components/Header'

function Authenticated() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  /**
   * Log the user out and redirect to the login page
   * @returns {void}
   */
  function handleLogOut() {
    // TODO: add some real logic here
    try {
      dispatch({ type: 'auth/setIsLoggedIn', payload: false })
      navigate('/login', { replace: true })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="bg-gray-200 relative flex min-h-screen flex-col">
      <div className="p-4 pb-0">
        <Header />
      </div>
      <div className="flex h-full p-4 gap-4">
        <SidebarNavigation />
        <div className="p-4 bg-gray-50 w-full rounded">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Authenticated
