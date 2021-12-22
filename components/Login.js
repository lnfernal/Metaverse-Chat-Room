import Image from 'next/image';
import { useMoralis } from 'react-moralis'

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative overflow-visible">
            <h1>Login screen</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center 
            justify-center space-y-4 '>
                <Image
                    className=' sm: object-cover rounded-full'
                    src="https://assets-global.website-files.com/5e6b63ac3b6e2522d1889f4a/619789035d8661557a29b44a_What%20Was%20Will%20Never%20Be-%20Violet%20.jpeg"
                    height={200}
                    width={200} />
                <button onClick={authenticate} className='bg-blue-500 rounded-lg p-5 font-bold animate-pulse'>Login to Facebook METAVERSE</button>
            </div>
            <div className='w-full h-screen'>
                <Image src="https://blog.rtrack.live/wp-content/uploads/2021/03/c4e9a54bc31dce51160937ee6372ff0b2d0414cd.png"
                    layout="fill"
                />
            </div>
        </div>
    )
}

export default Login
