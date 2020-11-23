import * as React from 'react';

const ColorContext = React.createContext('color');

const ColorProvider = ColorContext.Provider;

const ColorConsumer = ColorContext.Consumer;

export { ColorContext, ColorProvider, ColorConsumer }
