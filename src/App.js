import React, {Component} from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topnavigation/topNavigation';
import SideNavigation from './components/sidenavigation/sideNavigation';
import './index.css';

class App extends Component {

    render() {
        return (
                <div className="flexible-content">
                    <TopNavigation/>
                    <SideNavigation/>
                    <main id="content" className="p-5">
                        <Routes/>
                    </main>
                </div>

        );
    }
}

export default App;
