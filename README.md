# react-http-app
 
# installed axios 
    npm install axios --save
    
# call the service in componentDidMount
    use promise since it is asynchronous 

# retrieve fetch data and render on the screen
   create state for the response data and render on the screen.

# Make post selectable and update the full post

# Fetch data on update (wo infinite loops)
# post data to the server
   
# sending a delete request

this is similar to the above requests.

* use interceptors to add changes in header request globally

* You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):

var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

Router  - router not developed by Facebook but standard router react provides
routing is concept of parcing the URL and based on config reload the pages  which provides multi page effect to the user.


Absolute vs Relative Paths (Article)
You learned about <Link> , you learned about the to  property it uses.

The path you can use in to can be either absolute or relative. 

Absolute Paths
By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

Relative Paths
Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new .

There's no better or worse way of creating Link paths - choose the one you need. Sometimes, you want to ensure that you always load the same path, no matter on which path you already are => Use absolute paths in this scenario.

Use relative paths if you want to navigate relative to your existing path.

--------------

Parsing Query Parameters & the Fragment
You learned how to extract route parameters (=> :id  etc). 

But how do you extract search (also referred to as "query") parameters (=> ?something=somevalue  at the end of the URL)? How do you extract the fragment (=> #something  at the end of the URL)?

Query Params:
You can pass them easily like this:

<Link to="/my-path?start=5">Go to Start</Link> 

or

<Link 
    to={‌{
        pathname: '/my-path',
        search: '?start=5'
    }}
    >Go to Start</Link>
React router makes it easy to get access to the search string: props.location.search .

But that will only give you something like ?start=5 

You probably want to get the key-value pair, without the ?  and the = . Here's a snippet which allows you to easily extract that information:

componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
URLSearchParams  is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries()  method. entries()  returns an Iterator - basically a construct which can be used in a for...of...  loop (as shown above).

When looping through query.entries() , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

Fragment:
You can pass it easily like this:

<Link to="/my-path#start-position">Go to Start</Link> 

or

<Link 
    to={‌{
        pathname: '/my-path',
        hash: 'start-position'
    }}
    >Go to Start</Link>
React router makes it easy to extract the fragment. You can simply access props.location.hash .

---------
sometimes you want few pages to be restricted to the unauthenticated user.those are redirection guards..

using this concept we can prevent user from accessing unauthenticated pages by checking the condition.
one way is specifing the route with condition and another way adding the check in condition in componentdidmount.

---
the technique of only downloading the file what you need is code splitting or lazy loading. This is beneficail in larger applications.not necessary to load the entire filrs.

when hosting the app always load index.html in case of success or failure
example.com/my-app need to set the base path of react router
using basename   {/* <BrowserRouter basename ="/my-app"> */} in app.js