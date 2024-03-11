import { Sidebar } from 'flowbite-react'
import { BiBuoy } from 'react-icons/bi'
import { HiChartPie, HiViewBoards, HiGlobeAlt } from 'react-icons/hi'

const SidebarNavigation = () => {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/analyze/images" icon={HiViewBoards}>
            Images
          </Sidebar.Item>
          <Sidebar.Item href="/analyze/web" icon={HiGlobeAlt}>
            Websites
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SidebarNavigation
