import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts';
import ScrollToTop from './components/ScrollToTop';
import { Button } from '@material-tailwind/react';
import { Fab } from '@mui/material';
import { MoonIcon } from './components/Icons';
function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App relative w-screen h-screen">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
