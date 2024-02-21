// / function Food() {
    //   return (
    //     <div className="App">
    //       <Link to='/post/1'>Post 1</Link>
    //       <Link to='/post/2'>Post 2</Link>
    //       <Link to='/post/3'>Post 3</Link>
    //       <Route path="/post/:postId" component={BlogPost} />
    //     </div>
    //   );
    // }

    // src/components/PrivateRoute.js
    // import React from 'react';
    // import { Route, Redirect } from 'react-router-dom';
    // import authService from '../services/authService';     
    // const PrivateRoute = ({ component: Component, ...rest }) => {
    //   return (
    //     <Route
    //       {...rest}
    //       render={(props) =>
    //         authService.isAuthenticated() ? (
    //           <Component {...props} />
    //         ) : (
    //           <Redirect to="/login" />
    //         )
    //       }
    //     />
    //   );
    // };
    
    // // export default PrivateRoute;
    // // src/services/authService.js
    // class AuthService {
    //   login(username, password) {
    //     // For simplicity, let's assume any non-empty username/password is valid
    //     return Promise.resolve({ username }); // Simulating successful login
    //   }
    
    //   logout() {
    //     // For simplicity, let's just clear the user's session
    //     return Promise.resolve();
    //   }
    
    //   isAuthenticated() {
    //     // For simplicity, let's assume user is always authenticated
    //     return true;
    //   }
    // }



    // protectedrouter
    // export default new AuthService();
    // src/components/ProtectedRoute.js
    // import React from 'react';
    // import { Route, Redirect } from 'react-router-dom';
    // import authService from '../services/authService';
    
    // const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
    //   return (
    //     <Route
    //       {...rest}
    //       render={(props) =>
    //         authService.isAuthenticated() && authService.getUserRole() === requiredRole ? (
    //           <Component {...props} />
    //         ) : (
    //           <Redirect to="/access-denied" />
    //         )
    //       }
    //     />
    //   );
    // };
    
    // export default ProtectedRoute;
     // // src/services/authService.js
    // class AuthService {
    //   login(username, password) {
    //     // For simplicity, let's assume any non-empty username/password is valid
    //     return Promise.resolve({ username }); // Simulating successful login
    //   }
    //   logout() {
    //     // For simplicity, let's just clear the user's session
    //     return Promise.resolve();
    //   }
    //   isAuthenticated() {
    //     // For simplicity, let's assume user is always authenticated
    //     return true;
    //   }
    //   getUserRole() {
    //     // For simplicity, let's assume user role is 'admin'
    //     return 'admin';
    //   }
    // }
    {/* <ProtectedRoute exact path="/admin" component={AdminPage} requiredRole="admin" /> */}
    

    // Dynamic routing
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';
// import Post from './components/Post';

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from an API
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <Router>
//       <div>
//         <h1>Posts</h1>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>
//               <Link to={`/post/${post.id}`}>{post.title}</Link>
//             </li>
//           ))}
//         </ul>
//         <Switch>
//           <Route path="/post/:postId">
//             <Post />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
// components/Post.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// function Post() {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     // Fetch post details based on postId
//     const fetchPost = async () => {
//       try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//         setPost(response.data);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     fetchPost();
//   }, [postId]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export default Post;

