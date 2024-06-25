import { cn } from "@/lib/utils";

interface MaxWidthComponent {
    children: React.ReactNode;
    className?: string;
}

const MaxWidthComponent = ({ children, className }: MaxWidthComponent) => {
    return (
        <>
            <section
                className={cn(
                    "mx-auto max-w-screen-md bg-background px-4",
                    className
                )}
            >
                {children}
            </section>
        </>
    );
};

export default MaxWidthComponent;
