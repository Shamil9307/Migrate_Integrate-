import React from 'react';
import { Card, ListGroup, Tab, Tabs } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import UserCard from '../ui/UserCard';
import MigrationCard from '../ui/MigrationCard';

export default function AccountPage(): JSX.Element {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="home" title="Мой профиль">
          <MigrationCard />
        </Tab>
        <Tab eventKey="profile" title="Наставник">
          <UserCard />
        </Tab>
        <Tab eventKey="longer-tab" title="Связаться с наставником">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>
    </div>
  );
}
