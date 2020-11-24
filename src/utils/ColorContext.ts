import * as React from 'react';

const ColorContext = React.createContext('color');

const ColorConsumer = ColorContext.Consumer;

const ColorProvider = ColorContext.Provider;

export { ColorContext, ColorProvider, ColorConsumer }
