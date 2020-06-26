import React,{ Component } from 'react';
import Post from '../../components/Post/Post';
import './Posts.css';
import axios from '../../axios';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('/posts')
        .then ((response) => {
            console.log('ha');
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map ((post) => {
                    return {
                        ...post,
                        author:'GG'
                    }
            });
            this.setState ({ posts : updatedPosts});
           // console.log (response);
        }).catch((error) => {
          // this.setState({error : true});
        });
    }
    postSelectedHandler = (id) => {
      //  this.setState ({selectedPostId : id});
    }
    render () {
        let posts = <p>Something went wrong!</p>;
      //  if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author} 
                            clicked={() => this.postSelectedHandler (post.id)}/>
            });
     //   }
    
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts;