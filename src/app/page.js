"use client"; // حتما اضافه کن!

import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store"; // مسیر رو طبق ساختار خودت تنظیم کن
import Calculator from "@/components/Calculator"; // مسیر کامپوننت ماشین حساب

const Home = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default Home;
