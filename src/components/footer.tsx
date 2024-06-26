import { Socials } from "./socials";

const Footer = () => {
    return (
        <>
            <footer className='w-full flex items-center justify-between flex-col gap-8 md:flex-row md:gap-0'>
                <Socials isHide />
                <div className='text-secondary-foreground text-xs'>
                    &copy; skies-codes 2024
                </div>
            </footer>
        </>
    );
};

export default Footer;
