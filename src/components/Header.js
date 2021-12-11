import React, { useState } from "react";
import styled from "styled-components";
import Menu from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
// import { counterActions } from "../features/car/carSlice";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector((state) => state.cars);

  return (
    <Container>
      <a href="#logo">
        <img src="/images/logo.svg" alt="" />
      </a>
      <MenuItem>
        {cars &&
          cars.map((car, index) => (
            <a href="#models" key={index}>
              {car}
            </a>
          ))}
      </MenuItem>
      <RightMenu>
        <a href="#shop">shop</a>
        <a href="#tesla">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>

        <li>
          <a href="#burger">Charging</a>
        </li>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="#" key={index}>
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href="#burger">Existing Inventory</a>
        </li>
        <li>
          <a href="#burger">Use Inventory</a>
        </li>
        <li>
          <a href="#burger">Trade-in</a>
        </li>
        <li>
          <a href="#burger">Cybertruck</a>
        </li>
        <li>
          <a href="#burger">Roaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(Menu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.5s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
