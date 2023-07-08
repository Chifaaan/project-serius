import React from 'react'
import NameList from '../Components/NameList';
import About from '../Components/About';

const AboutUs = () => {
    return (
        <div className="relative">
                <About />
            <div class="flex h-full">
            <NameList />
            </div>
        </div>
    );
}

export default AboutUs