import Projects from "@/components/Projects/projects";
import AboutMe from "@/components/about-me";
import Divider from "@/components/custom-ui/divider";
import Footer from "@/components/footer";
import MaxWidthComponent from "@/components/max-width-comp";
import MySkills from "@/components/my-skills";
import Navbar from "@/components/navbar";
import { Socials } from "@/components/socials";

export default function Home() {
    return (
        <main className='w-full bg-background py-6'>
            <MaxWidthComponent className='w-full h-full flex flex-col items-start text-md'>
                <Navbar />
                <AboutMe />
                <Socials className='mt-10' />
                <MySkills />
                <Projects />
                <Divider />
                <Footer />
            </MaxWidthComponent>
        </main>
    );
}
