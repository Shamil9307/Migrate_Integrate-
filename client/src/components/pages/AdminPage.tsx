import React from 'react';
import { Row, Tab, Tabs } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import UserCard from '../ui/UserCard';
import MigrationCard from '../ui/MigrationCard';
import MentorCard from '../ui/MentorCard';

export default function AdminPage(): JSX.Element {
  const candidatMentor = useAppSelector((store) => store.userSlice.allUser).filter(
    (el) => el.statusId === 2 && el.roleId === 2,
  );

  const Mentors = useAppSelector((store) => store.userSlice.allUser).filter(
    (el) => el.roleId === 2 && el.statusId === 1,
  );
  const migrant = useAppSelector((store) => store.userSlice.allUser).filter(
    (el) => el.roleId === 3,
  );

  return (
    <div>
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="home" title="Кандидаты в наставники">
          <Row className="m-3">
            {candidatMentor.map((el) => (
              <UserCard key={el.id} user={el} />
            ))}
          </Row>
        </Tab>
        <Tab eventKey="profile" title="Наставники">
          <Row className="m-3">
            {Mentors.map((el) => (
              <MentorCard key={el.id} user={el} />
            ))}
          </Row>
        </Tab>
        <Tab eventKey="longer-tab" title="Мигранты">
          <Row className="m-3">
            {migrant.map((el) => (
              <MigrationCard key={el.id} migr={el} />
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}
