import React,{ Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
import axios from '../../axios';
//import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('/posts')
        .then ((response) => {
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
      // this.setState ({selectedPostId : id});
        //this.props.history.push('/posts/'+id);
        this.props.history.push({ pathname : '/posts/' + id });
    }
    render () {
        let posts = <p>Something went wrong!</p>;
      //  if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                   // <Link to={'/posts'+post.id} key={post.id}>
                        <Post
                            key={post.id} 
                            title={post.title} 
                            author={post.author} 
                            clicked={() => this.postSelectedHandler ( post.id )}/>
                   // </Link>
                   )
            });
     //   }
    
        return(
            <div>
                 <section className="Posts">
                    {posts}
                 </section>
                 <Route path={this.props.match.url +'/:id'}  component={FullPost} />
            </div>
        )
    }
}


export default Posts;