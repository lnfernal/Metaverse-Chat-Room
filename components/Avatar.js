import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis();

    return (
        <Image
            className="rounded-full bg-black cursor-pointer hover:opacity-60"
            layout="fill"
            onClick={() => logoutOnPress && logout()}
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
        />
    )
}

export default Avatar
