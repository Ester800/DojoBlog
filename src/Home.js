import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
        //console.log('use effect ran');
        //console.log(blogs);
        //console.log(name);

        fetch('http://localhost:7000/blogs')
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="All blogs!" /> }
        </div>
    );
}

export default Home;
