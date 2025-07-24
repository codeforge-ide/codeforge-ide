"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CodeShowcase from "../components/CodeShowcase";
import Integrations from "../components/Integrations";

export default function HomeClient() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CodeShowcase />
      <Integrations />
    </>
  );
}
