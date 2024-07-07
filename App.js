import React from 'react';
import './App.css';
import Layout from "./Layout";
import Home from './Home';
import Login from './Login';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Budget from "./Product Components/Budget";
import Midrange from './Product Components/Midrange';
import Premium from './Product Components/Premium';
import UltraPremium from './Product Components/UltraPremium';
import Airconditioners from './Product Components/Airconditioners';
import Refrigerators from './Product Components/Refrigerators';
import Microwaves from './Product Components/Microwaves';
import WashingMachines from './Product Components/WashingMachines';
import Spinmops from './Product Components/Spinmops';
import Bathroom from './Product Components/Bathroom';
import Hammers from './Product Components/Hammers';
import Extension from './Product Components/Extension';
import Bedsheets from './Product Components/Bedsheets';
import Homedecor from './Product Components/Homedecor';
import Toys from './Product Components/Toys';
import Tshirts from './Product Components/Tshirts';
import Product1 from './Product Components/Product1';
import Product2 from './Product Components/Product2';
import Product3 from './Product Components/Product3';
import Product4 from './Product Components/Product4';
import Product5 from './Product Components/Product5';
import Product6 from './Product Components/Product6';
import Product7 from './Product Components/Product7';
import Product8 from './Product Components/Product8';
import Product9 from './Product Components/Product9';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="Budget" element={<Budget />} />
      <Route path="Midrange" element={<Midrange />} />
      <Route path="Premium" element={<Premium />} />
      <Route path="UltraPremium" element={<UltraPremium />} />
      <Route path="Airconditioners" element={<Airconditioners />} />
      <Route path="Refrigerators" element={<Refrigerators />} />
      <Route path="Microwaves" element={<Microwaves />} />
      <Route path="WashingMachines" element={<WashingMachines />} />
      <Route path="Spinmops" element={<Spinmops />} />
      <Route path="Bathroom" element={<Bathroom />} />
      <Route path="Hammers" element={<Hammers />} />
      <Route path="Extension" element={<Extension />} />
      <Route path="Bedsheets" element={<Bedsheets />} />
      <Route path="Homedecor" element={<Homedecor />} />
      <Route path="Toys" element={<Toys />} />
      <Route path="Tshirts" element={<Tshirts />} />
      <Route path="/product/1" element={<Product1 />} />
      <Route path="/product/2" element={<Product2 />} />
      <Route path="/product/3" element={<Product3 />} />
      <Route path="/product/4" element={<Product4 />} />
      <Route path="/product/5" element={<Product5 />} />
      <Route path="/product/6" element={<Product6 />} />
      <Route path="/product/7" element={<Product7 />} />
      <Route path="/product/8" element={<Product8 />} />
      <Route path="/product/9" element={<Product9 />} />
    </Route>
  )
);

export default function MyApp() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}