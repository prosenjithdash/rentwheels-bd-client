import AboutBanner from "../../components/About/AboutBanner";
import AboutCount from "../../components/About/AboutCount";
import Mission_Vision from "../../components/About/Mission_Vision";
import OurStory from "../../components/About/OurStory";
import Team from "../../components/About/Team";
import WhatDrivesUs from "../../components/About/WhatDrivesUs";

const About = () => {
    return (
        <div>
            {/* We will create component on Component folder then linkup here... */}
            <AboutBanner />
            <AboutCount />
            <OurStory />
            <WhatDrivesUs />
            <Mission_Vision />
            <Team/>
        </div>
    );
};

export default About;