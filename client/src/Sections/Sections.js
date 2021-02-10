/*function Sections() {
    return (
        <h1>Sections</h1>
    )
}

export default Sections;
*/
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SectionsList from './SectionsList';

function Sections(){
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path= {path}>
                <SectionsList />
            </Route>
            <Route path={`${path}/new`} >

            </Route>
        </Switch>
    );
}

export default Sections;