import React from 'react';
import { LayoutContainer } from './styles';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
  <LayoutContainer>
    <Header />
    <Outlet />
  </LayoutContainer>
  )
}

export default DefaultLayout;