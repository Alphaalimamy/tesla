import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        left="Customer Order"
        rightBtn="Existing Inventory"
      />

      <Section
        title="Model  X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        left="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model  Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        left="Customer Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Solar Panel"
        description="Order Online for Touchless Delivery"
        backgroundImg="solar-panel.jpg"
        left="Customer Order"
        rightBtn="Existing Inventory"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        left="Shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
