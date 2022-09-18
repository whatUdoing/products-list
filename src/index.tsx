import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './app';
import { SetupApp } from './core/setup_app';
import { ProductsInitializer } from './features/products/products_initializer';

export const app = new SetupApp();

app.initFeature(ProductsInitializer);

const root = createRoot(document.getElementById('app') as HTMLDivElement);

root.render(<App />);
