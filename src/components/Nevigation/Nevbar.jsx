import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { PenBox, FolderOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import UserMenu from '../userMenu/UserMenu';
import { ModeToggle } from '../mode-toggle';

const Nevbar = () => {
  return (
    <header className=''>
      <nav className="p-5 text-white flex justify-between">
        <div className="text-xl text-black bold flex items-center gap-5 ml-20">
          <img src="/image.png" alt="" className='h-15 w-15 object-cover sm:hidden lg:block md:block' />
          <p className='text-blue-400 font-bold'>Happy Journal</p>
        </div>

        <div className='flex items-center w-80 gap-4 sm:justify-end sm:pr-10'>
          <ModeToggle className='bg-grey-800' />
          <SignedIn>
            <Link to='/dashboard'>
              <Button className='bg-black text-white'>
                <FolderOpen /> <span className='hidden md:inline'>Collection</span>
              </Button>
            </Link>
          </SignedIn>
          <Link to='/writeContent'>
            <Button className='bg-black text-white pr-10'>
              <PenBox /> <span className='hidden md:inline'>Write new</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button>Log in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Nevbar;