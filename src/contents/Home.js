import React, { Component } from 'react';
// import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
           
            <div className="condiv home">
                <img src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/323323557_1331898320918004_3668099269665136157_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oCPKF6tuu3EAX8Jyy_f&_nc_oc=AQm_WU8KGKQHNMfjxav6kLifcUroLlpPZBC-PYzSGFYcs1AfKKqCkxllEx6pcg3jH8SojlI3Oh4N6ClAh-CkqEFu&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfBHUeAZoZuM_oCoWQW4NtjY61D0CXBAdIXrWW5C6apkQw&oe=642D4755" alt="profile" className="profilepic" />
                <ReactTypingEffect text={[' Hi, my name is Panawat Klaykong', 'I am a Web Developer']} speed={85} eraseDelay={250} className="typingeffect" />
                <Social />
                
            </div>
        );
    }
}

export default Home;