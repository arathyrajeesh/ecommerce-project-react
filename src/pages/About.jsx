import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <> 
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text-column">
                        <h2>OUR STORY</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                    <div className="about-image-column">
                        <img 
                            src="https://static.wixstatic.com/media/82fcd3_da126aa5b7b7491193e7d8d838f6bf9e~mv2_d_5999_4005_s_4_2.jpg/v1/fill/w_781,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_da126aa5b7b7491193e7d8d838f6bf9e~mv2_d_5999_4005_s_4_2.jpg"
                            alt="Two people looking at a mountain lake"
                        />
                    </div>
                </div>
            </div>
            <div className="giving-back-container">
                <div className="giving-back-content">
                    <div className="giving-back-image-column">
                        <img 
                            src="https://static.wixstatic.com/media/82fcd3_88c838210f0f411ba4f01279652e0371~mv2_d_3264_1925_s_2.jpg/v1/fill/w_779,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_88c838210f0f411ba4f01279652e0371~mv2_d_3264_1925_s_2.jpg"
                            alt="A river flowing through a canyon"
                        />
                    </div>
                    <div className="giving-back-text-column">
                        <h2>Giving Back</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;