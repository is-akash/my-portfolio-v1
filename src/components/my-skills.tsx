import { skillsMap } from "@/config/skills";

const MySkills = () => {
    return (
        <>
            <div className='w-full flex items-start flex-col py-10'>
                <h1 className='text-xl text-foreground dark:text-foreground'>
                    Tech stack
                </h1>
                {Object.keys(skillsMap).map((key) => (
                    <div key={key} className='mt-4 flex gap-2 flex-wrap'>
                        {(skillsMap as any)[key].map(
                            (value: string, index: number) => (
                                <div
                                    key={index}
                                    className='text-accent-foreground bg-white text-sm p-[2px] rounded-md cursor-pointer border dark:bg-card dark:border-border shadow hover:shadow-md dark:hover:shadow-blue-500 dark:hover:shadow-sm'
                                >
                                    <span className='w-full whitespace-nowrap p-1 rounded-md'>
                                        {value}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MySkills;
