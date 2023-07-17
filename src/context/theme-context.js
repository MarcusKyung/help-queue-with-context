import React from 'react';

export const themes = { //created CSS object
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender", 
    inputBackground: "Gainsboro"
  },
  dark: {
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
};

export const ThemeContext = React.createContext(); //created new context with createContext() method
// console.log(ThemeContext.Provider);  //Provider and consumer components are created from createContext() method. Provider provides data to component tree
// console.log(ThemeContext.Consumer);  //Consumer components enable individual components to use data the provider component exposes

//Key thing to know here is consumers subscribe to the provider. When the value of provider component changes all components that consumer providers data will be re-rendered.