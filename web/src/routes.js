import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Product from './pages/Product'
import Nike from './pages/Nike';

import Navbar from './components/navbar'

export default function Routes() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/product/:product' exact component={Product} />
                <Route path='/nike' exact component={Nike} />
            </Switch>
        </BrowserRouter>
    )
}
