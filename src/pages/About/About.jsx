import AboutBanner from "../../components/About/AboutBanner";
import AboutCount from "../../components/About/AboutCount";
import OurStory from "../../components/About/OurStory";

const About = () => {
    return (
        <div>
            {/* We will create component on Component folder then linkup here... */}
            <AboutBanner />
            <AboutCount />
            <OurStory/>
        </div>
    );
};

export default About;