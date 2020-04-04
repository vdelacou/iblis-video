import React, { FC } from 'react';
import { Header } from '../../components/header';
import { useGetHeaderMenu } from './hooks';

/**
 * The header layout for the app
 */
export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const [headerTitle, userMenuProps, subMenuProps] = useGetHeaderMenu();

  return <Header headerTitle={headerTitle} toggleNavigator={props.toggleNavigator} userMenuProps={userMenuProps} subMenuProps={subMenuProps} />;
};

export interface HeaderLayoutProps {
  /**
   * Action to launch when the navigator requests to be closed
   */
  toggleNavigator: () => void;
}
