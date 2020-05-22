import React from 'react'

const StateContext = React.createContext({
    notes: [],
    folders: [],
    mySetState: () => {}
});

export default StateContext;