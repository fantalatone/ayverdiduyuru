import React from 'react';
import { globalStyles } from "./styles/global";
import Navigator from "./routes/feedStack";

export default function App() {
  return (
    <Navigator style={globalStyles.container}/>
  );
}