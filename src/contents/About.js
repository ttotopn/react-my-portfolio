import React, { Component } from 'react'
// import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1> 
                <img src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/323323557_1331898320918004_3668099269665136157_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oCPKF6tuu3EAX8Jyy_f&_nc_oc=AQm_WU8KGKQHNMfjxav6kLifcUroLlpPZBC-PYzSGFYcs1AfKKqCkxllEx6pcg3jH8SojlI3Oh4N6ClAh-CkqEFu&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfBHUeAZoZuM_oCoWQW4NtjY61D0CXBAdIXrWW5C6apkQw&oe=642D4755" alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Panawat</h3>
                <p>After I graduated, I enlisted in the military for 6 months. After that I worked as a design engineer for 8 months. Work on projects according to customer requirements, receive job details from customers, what tasks, who is the user group, what media is used, where is used, analyzed to generate ideas that will respond to the given problem. I'm currently interested in working in the front-end area, the responsibilities of this position I feel like it's a new position with a fun and challenging company is an opportunity for me to learn. Know and develop myself to increase my abilities. Previously I studied Reactjs Nodejs SQL and took an English course. My goal now is I want to improve myself, get better, try something new. And it's not too stressful. My long-term goal now is to look after those around me.
health care exercise regularly eat nutritious food get enough rest</p>
            </div>
        );
    }
}

export default About;
