import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

const NavBar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Air Quality Index</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="/" title="Home:AQI" />
            <Link href="/articles" title="Articles" />
            <Link href="/ourteam" title="Our Team" />

          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="/" title="Home:AQI" />
              <Link href="/articles" title="Articles" />
              <Link href="/ourteam" title="Our Team" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
