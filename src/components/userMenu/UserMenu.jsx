import { UserButton } from '@clerk/clerk-react'
import { ChartNoAxesGantt } from 'lucide-react'

const UserMenu = () => {
  return (
    <UserButton 
      appearance={{
        elements: {
          avatarBox: "h-10 w-10"  
        }
      }}
    >
     
      <UserButton.MenuItems>
        <UserButton.Link
          label="Dashboard"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/dashboard" 
        />
      </UserButton.MenuItems>
    </UserButton>
  )
}

export default UserMenu
