import Image from 'next/image';
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const { user } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div className="grid grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout="fill"
                        object-fit="cover"
                        className="rounded-full "
                        src="https://assets-global.website-files.com/5e6b63ac3b6e2522d1889f4a/619789035d8661557a29b44a_What%20Was%20Will%20Never%20Be-%20Violet%20.jpeg" />
                </div>

                <div className='col-span-4 text-left lg:text-center'>
                    <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className='text-3xl'>Welcome to the Facebook METAVERSE App</h1>
                    <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
