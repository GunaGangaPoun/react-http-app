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