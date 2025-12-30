import{createBrowserRouter} from 'react-router-dom';

//pages to be linked

import HomePage from '../components/pages/Home/HomePage';
import AboutPage from '../components/pages/About/AboutPage';
import App from '../App';


//generating the router object providing array of 'path - page' pairs.
// this helps store  teh mapping of each path to their respective pages to 
// be loaded when we visit that path in website


 const my_router = createBrowserRouter(
    [
        {
            element : <App/>,
            children : [
            {
            path : '/',
            element : <HomePage />
        },
        {
            path : '/about',
            element : <AboutPage/>
        }
        ]
        }
    ]
 )

 export default my_router;