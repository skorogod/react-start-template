import React, { FC, ReactElement } from 'react';
import type { User } from 'src/interfaces/user.interface';
import { Logo } from '../logo/Logo';
import { Button } from '../button/Button';

import headerCss from './header.module.scss';

type HeaderProps = {
  user?: User;
  backgroundColor?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
};

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header style={{ backgroundColor: props.backgroundColor }} className={headerCss.header}>
      <div className={headerCss.content}>
        <div className={headerCss.logo}>
          <Logo />
        </div>
        <div className={headerCss.userInfo}>
          {props.user ? (
            <>
              <Button size="small" onClick={props.onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={props.onLogin} label="Log in" />
              <Button primary size="small" onClick={props.onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
