import {  Hero, Portfolio, Resume, Service, Skill, } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      
    </>
  );
};