import React from 'react';
import Provider from './context/';
import ThemeProvider from './features/ThemeProvider'
import Nav from './features/Nav';
import Main from './features/Main'

const App = () => {

    return (<div className="Mindmap-App">
    <Provider>
        <ThemeProvider>
            <Nav />
            <Main />
        </ThemeProvider>
    </Provider>
    </div>);
};

export default App;
