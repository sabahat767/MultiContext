import React, { Component,createContext } from 'react'
export const ThemeContext=createContext();

export class ThemeContextProvider extends Component {
    state={
        isLight:true,
        light:{text:'black',bg:'white'},
        dark:{text:'white',bg:'black'}
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
               {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
