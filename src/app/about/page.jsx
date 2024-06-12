import Favorit from "@/components/about/favoritsec"
import MeetOurTeam from "@/components/about/meetTeam"
import BestQualityy from "@/components/about/besetQuality"

const About = () => {
    return(
        < >
            <section className="bg-[whitesmoke]">
                <div className="text-slate-700 p-14">
                    <h1 className="font-bold text-5xl text-center">About Us</h1>
                    
                    <p className=" pt-10 md:w-3/5 lg:w-1/2 text-justify m-auto">Print, a Cimpress company, helps small business owners create expertly designed, up-to-date custom marketing – the assortment of products they need to look and feel professional, prepared and plugged in.</p>
                    <p className=" pt-5 md:w-3/5 lg:w-1/2 text-justify  m-auto">Yes, we said assortment. It’s true that we’re best known for our business cards – and we’ve printed billions of them since Robert Keane founded Print in 1995.</p>
                </div>
            </section>

            <Favorit/>
            <MeetOurTeam/>
            <BestQualityy/>

        </>
        
        
    )
}

export default About