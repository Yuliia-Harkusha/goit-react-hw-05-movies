import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  box-shadow: 0 1px 5px rgba(51, 51, 51, 0.23);
`;

export const GoBackBtn = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-top: 15px;
  margin-bottom: 8px;
  margin-left: 10px;
  border: solid 1px #a7051e;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    color: #db2944;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 30px;
  padding: 10px;
`;

export const Image = styled.img`
  display: block;
  width: 260px;
  height: auto;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Info = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  display: block;
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
`;

export const NavItem = styled(NavLink)`
  display: block;
  padding: 7px 10px;
  font-weight: 500;
`;
