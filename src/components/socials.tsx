import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social.links";
import { IconMap } from "./icons-map";
import { cn } from "@/lib/utils";

interface SocialsProps {
    className?: string;
}

export const Socials = ({ className }: SocialsProps) => {
    return (
        <div className={cn("flex flex-wrap items-center gap-2", className)}>
            <Button className='shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all'>
                <a href='https://cal.com/skies-codes' target='_blank'>
                    Schedule a call
                </a>
            </Button>
            <Button
                variant='outline'
                className='active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100'
            >
                <a href={socialLinks.resume} target='_blank'>
                    Resume
                </a>
            </Button>
            {Object.keys(socialLinks.links).map(
                (key: string, index: number) => {
                    const link =
                        socialLinks.links[
                            key as keyof typeof socialLinks.links
                        ];
                    return (
                        <Button
                            key={key}
                            size='icon'
                            variant='outline'
                            className='active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100'
                            asChild
                        >
                            <a href={link} target='_blank'>
                                {IconMap[key as keyof typeof IconMap]}
                                <span className='sr-only'>{`${key} - ${link}`}</span>
                            </a>
                        </Button>
                    );
                }
            )}
        </div>
    );
};
