import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: 'Welcome to my new Website!', author: 'McKay', id: 1 },
        { title: "Welcome Party!", body: 'Badda Bing!', author: 'McKay', id: 2 },
        { title: "Web dev top tips", body: 'Tip #1: Dont Worry - Be Happy!', author: 'McKay', id: 3 },
    ]);


    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All blogs!"/>
        </div>
    );
}

export default Home;
