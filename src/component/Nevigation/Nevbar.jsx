
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const Nevbar = () => {
  return (
    <header className=''>
      <nav className="p-5 text-white flex justify-between items-center">
        <div className="text-lg text-black">Logo</div>
        <div><SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn></div>
      </nav>
      
    </header>
  )
}

export default Nevbar