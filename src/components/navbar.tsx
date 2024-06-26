import React from "react";
import LoadImage from "./load-image";
import { ModeToggle } from "./theme/mode-toggle";

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between'>
            <div className='flex items-center'>
                <LoadImage
                    src='/profile.jpeg'
                    width={65}
                    height={65}
                    alt='profile-img'
                    className=' rounded-full'
                />
                <ul className='ml-4'>
                    <li>
                        <h1 className='text-foreground text-base font-semibold'>
                            Akash Debnath
                        </h1>
                        <p className='text-sm text-secondary-foreground'>
                            Fresher
                        </p>
                    </li>
                </ul>
            </div>
            <ModeToggle />
        </nav>
    );
};

export default Navbar;
