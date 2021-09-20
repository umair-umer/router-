

import {
    BrowserRouter as Router, Route,Switch   } from "react-router-dom";
    import {Home,About,Contact, Profile,EditPro} from '../container'

function AppRouter(){
    return(
        <Router>
            <Switch>
                      <Route exact path ="/" component={Home} />
                      <Route exact path ="/about" component={About} />
                      <Route exact path ="/contact" component={Contact} />
                      <Route exact path ="/profile/edit_profile" component={EditPro} />
                      <Route exact path ="/profile/:id" component={Profile} />
             

</Switch>
        </Router>
    );
    

}


export default AppRouter;