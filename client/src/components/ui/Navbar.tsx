import React, { useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, Image, Button } from 'react-bootstrap';
import { useColorMode } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';
import AddRecModal from './AddRecModal';
import AddCultureModal from './AddCultureModal';
import AddLegalModal from './AddLegalModal';
import AddNovostModal from './AddNovostModal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AddLessonModal from './AddLessonModal';
import Chat from './Chat';
import ChatModal from './ChatModal';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);

  const [show, setShow] = useState(false);
  const [openLogModal, setOpenLogModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleCloseLogin = (): void => setOpenLogModal(false);
  const handleShowLogin = (): void => setOpenLogModal(true);
  const handleCloseSignup = (): void => setOpenSignupModal(false);
  const handleShowSignup = (): void => setOpenSignupModal(true);

  const [showCulture, setShowCulture] = useState(false);
  const handleCloseCulture = (): void => setShowCulture(false);
  const handleShowCulture = (): void => setShowCulture(true);

  const [showLegal, setShowLegal] = useState(false);
  const handleCloseLegal = (): void => setShowLegal(false);
  const handleShowLegal = (): void => setShowLegal(true);

  const [showNovost, setShowNovost] = useState(false);
  const handleCloseNovost = (): void => setShowNovost(false);
  const handleShowNovost = (): void => setShowNovost(true);

  const [showLesson, setShowLesson] = useState(false);
  const handleCloseLesson = (): void => setShowLesson(false);
  const handleShowLesson = (): void => setShowLesson(true);

  return (
    <Container style={{ height: '210px' }}>
      <Navbar expand="lg" className="navBar" style={{ height: '100%' }}>
        <Navbar.Brand href="/">
          <img src="../../../LOGO_PNG.png" alt="dsds" style={{ width: '260px', height: '320px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.status === 'guest' ? (
              <>
                <Nav.Link
                  style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '25px' }}
                  href="/signup"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowSignup();
                  }}
                >
                  Регистрация
                </Nav.Link>
                <Nav.Link
                  style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '25px' }}
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowLogin();
                  }}
                >
                  Авторизация
                </Nav.Link>
              </>
            ) : (
              <> </>
            )}
            {user.status === 'authenticated' ? (
              <NavDropdown className="category" title="Категории" id="basic-nav-dropdown">
                <NavDropdown.Item href="/lesson">Тренинги</NavDropdown.Item>
                <NavDropdown.Item href="/legal">Правовая информация</NavDropdown.Item>
                <NavDropdown.Item href="/recomendation">Рекомендации</NavDropdown.Item>
                <NavDropdown.Item href="/culture">Культура и досуг</NavDropdown.Item>
                <NavDropdown.Item href="/news">Новости</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            ) : (
              <> </>
            )}
            {user.status === 'authenticated' && user.id === 1 ? (
              <NavDropdown title="Добавить" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleShow}>Рекомендации</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowCulture}>Культура и досуг</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowLegal}>Правовая информация</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowNovost}>Новости</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowLesson}>Тренинги</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <> </>
            )}
          </Nav>

          {user.status === 'authenticated' ? (
            <Nav.Link
              className="logout"
              style={{
                fontWeight: '600',
                marginRight: '40px',
                fontFamily: 'Gill Sans, sans-serif',
                fontSize: '25px',
              }}
              onClick={() => {
                void dispatch(thunkLogout());
                window.location.href = '/';
              }}
            >
              Выйти
            </Nav.Link>
          ) : (
            <> </>
          )}
          {user.status === 'authenticated' ? (
            <>
              <a href="/account">
                <Image
                  src={user?.img}
                  roundedCircle
                  style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '20px' }}
                />
              </a>
              <a href="/chat">
                <Image
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUPERgRERISEhEREhgRERIREhIRERgRGBgaGRgYGBkcIS4lHB4rHxgYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQoISE/NDQxNDE0NDQxNDExNDQ0NDQxMTE0NDQ0MTQ0NDQ0NDQ0NDE0NDQ0PzE0NDQxNDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgIDBAUHAf/EAEMQAAIBAQIICwQJAwUBAQAAAAABAgMEEQUGEiExUXGhExUiMkFSYYGRsdEzU3LBFBZCVGJzkpOyIzWiB4LC4fCDQ//EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAoEQEAAgIBBAEEAQUAAAAAAAAAAQIDETESITJRFQQTM0FCBSJSYZH/2gAMAwEAAhEDEQA/AOsAADLhoWxFZRDQtiKwMWvzu4tlyvzu4tgXrP09xkGPQd19+b/zNLhTGinRvjT/AKs1m5L5CfbLp7iYrNp1A3tfmmltmGqFHNKopSX2Yct+i72Q/CGGa1p582odSHJh/wB995rzRT6f/JG0otGNrv8A6VJdjqP5R9TXV8ZbTP8A/TIWqEYx3u97zUA7xipH6GVUwlWnzq1R/wD0kvIsOrJ6ZSe2TZQC0ViOBWqklolLxZep2+rHm1ai2Tl6mMBMRI2tHGK0w0VXJapxjNeV+82NHG6bu4SnGV3TBuL8HeiMgrOKk/oTyyYwUKubLcJPoqLJz7Vet5uLNJN3ppq7Ss6OVmXYsI1aDvpVHHXHTF7YvMcb/Tx/E26oUVeayMYMxujO6NePBy68c8HtWmO8kmWpwyotSi1enFpprsaM1qzXlLHABAzgDwDEqc57Skqqc57SkAAAMvg1qQ4NakVgDElNp5n0jhJayl6XtfmeAZFNXq953rZjYRttKzRy6jS6sVnlJ6kukwsLYbhZIJc+rJXxh2daWpeZA7Za515udSTlJ+CWpLoXYdseKbd54Gwwth2pab4r+nS6kXp+J9PkagA11rFY1CAAFgAAAAAAAAAAAAADPwZhapZnyJXwfOpyzwfo+1GACJrFo1I6RgfC1K1x5KUZpcqEtK2a0bPIWpHJ6VSUJKcJOMou+Mou5pk4xfxhVdKlVujWuui9EZ3Lc+wx5MM17xwNyqktY4SWsto9OKWTGKaTaV70lXBrUhT5q2FYFvg1qXgC4AMbh32bxw77N5aAF9Uk8+fPn6Ok1OHsJxskM3KqzXIg7rvil2LeZ2EbfGzUeEn0JKMVpcnoSObW21TrzlUm75Sd/Yl0JdiO2LH1TueEKK1WVSTnOTlKTvbZbANsAAAAAAAAAAAAAAAAAAAAAAHsXc71pTvTWm88AE3xawwrQuCqu6qlyZdeK/5Ei4Ba3uOUQm4tSi2pJ3prSmtFx0XF/C6tdPPcqsM01o2SXYzHmx9M9UcDPdRxzK65Zs44d9m8oqc57Sk4JXeHfZvBaAF7gO3cHR7UZBHMbsI8DS4KLunWvjm0qH2n333d7JrE2nUCM4xYUdpq3Rf9KnfGC6H0OXfd4GpAPQrWKxqEAALAAAAAAAAAAAAAAAAAAAAAAAAAZmC7dKzVY1I9GacetF6UYYImImNSOp0WqsVUhJOM0pR2MucB27iK4l4SzuzTeudP/lHff4kxPPvXptpLH4Ht3M9MgFRbdWOvzOaYdt30i0TnfyE8in8Ec293vvJhh61cDZ5yWaUlkR+KWbyvfcc/NP09P5IkABqAAsW6s6dOc1pjHNteZETOo2LVqwjCk8mTvl1Y52tuox+PafVn4L1MKxWepRjC3ToQtFBzkpKosuDadzy0tHY3m2nRsX54NwhD+nZLLGolfOlOhSy49qzcpdq3Hl5frrV7xHZeKoLx7T6s/CPqe8e0+rPwXqdR+r1j+52X9in6D6vWP7nZf2KfocflLeluhy3j2n1Z+EfU949p9WfgvU6j9XrH9zsv7FP0H1esn3Oy/sU/QfKT6Ohy3j2n1Z7vU949p9Wf+PqdR+r1j+52X9in6D6vWP7nZf2KfoPlLejocu49p9WfgvUce0+rP/H1Oo/V6x/c7L+xT9B9XrH9zsv7FP0Hyk+jocu49p9Wf+Pqece0+rPd6nUvq9Y/udl/Yp+g+r1j+52X9in6D5S3o6HLuPafVn4L1POPafVn4R9TqX1esf3Oy/sU/QfV6x/c7L+xT9B8pPo6HLuPafVn/j6l2z4WpzeTe4t5llK5N7UT3DFjwdY6bnXs9lhF3qKjQp5cpXaIJK9s5dbF9KlOpQs8KdKnBylkpR5KV/KazOVy0I7YvrrW767KzVIwYGBa7nS5TvcHk361pXmZ56dLdVYlSQAFhestodKpGpHnQkpLu6NjV67zqFmtcakIzi+TOKktPSjlJMsUbVl0ZU289KWb4JXtb1Iz56bjqISnhVr3MGLeDIlFsc6+eFPUnNr/ABj/AMiLm4xqrZdrnqgowXck3vbNOehijVIQAAuBh4W9hPYv5IzDDwt7CexeaKZPCSErxCing6CaTTnUTTV6ac3ema/DmJjjP6RYJcHUi8vg1JxWVrpv7L7NBscQP7fD8yp/NklaPlb5LVyTMNkViaxtD8XseLpfR8IJ06sXkcK45Kyl0VI/Zfas2wnUZJpNNNNXpp3prWmR3D2L1G3x5ccmoldCrHnrsfWXYyI2a3WzAVRQqp1rI3yc7yP9knzJfhebzLRFcneO0+lJrMOonprsD4ao26nl0JqV3Pg7lUg9Uo9G3QbE4zExOpQ8B6eEJenh6APAemPbrbTs0HUqzjThHTKTuz9CWt9hMRtC+RLGbHSnZL6VC6taNGZ304P8TWmX4UaLCmM1owpUdlwfCcKbzTnzZyjrnL7EezS9HYbrF3FOnY7qk7qtfrtciD6VCPzec7dNaRu/PoiJtw0uDMWa+EKn0rCM5pS5tN8mpKPQrvsQ7FnMnClCNOhWp04qEI06ijGOZJZMibENw37Ov8FXykRTLa1/9Ok1iIRfF/2cvj+SNqarF/2cvj+SNqfUYfxwxzyAA6AbrFSvkWlR6KkXDvWdeW80pkYPrcHWhPqzi3sylfuvK3jdZgdKufb4Ayspa14g8/SXLcKTy7RUlrqT/k0YpXWlfOT1yb3lB6NY1EQgABIGHhf2E9i80Zhh4W9hPYvNFMnhJCWYgf2+H5lT+bJKRrED+3w/MqfzZJT5HN5y3V8YC3XoRqQcKkYzhJXSjJXxa2FwHPelkAwpirWsU/pWDZzWTndNO+aWlqN/Pj+F59pusWsdoWm6jabqNovyU3yac5aOnmS/C/8AokpHcYsVKVtTnG6lXu9pFcmT/GunbpNNctbR03/65Wp+4S0HNMG4xWnBNRWa3QlUo6ITvypKOuE/tx/C867NB0LB1vp2qCq0ZqcJaGtKeqS0xfYyt8c178x7U2yQUVqsacXOcowhFXylJpRS1tsgGG8c6lpn9FwbGcnLNwqTU38CfNX4nuFKTbgmUhxkxro4PTj7SvdyaUXddqc5fZW9kQs2CrVhmoq9rnKnZ0+RG67k6qcOj4nvNri/ibCk1WtbVas3lZD5cIy1yb58u15iX3FrZK07U7z7XrTfeWLg7B9OywVOjBQgtN2lvXJ6W9plgGaZmZ3LrEaCG4b9nX+Cr5SJkQ3Dns6/wVf4yOuHyUvwi+L/ALOXx/JG1NVi97OXx/JG1PrMP44Yp5AAdAAAEz46WveCG5T1sFPt1HtRXSa/E/MpMjCMMitUj1ak1/kzHLRO42AAJAw8LewnsXmjMMPC3sJ7F5opk8JISzED+3w/MqfzZJSNYgf2+H5k/wCbJKfI5vOW6vjAADksAADFt1hp2mm6daCnCXQ+h60+h9pBbZgW04Im7TYpyqUdM4NZTUdU4Lnx7Vn2HRAdaZbV7cx6UmsS5uvpmHpqU2qVki82TfwV66qvvnLt0LsJtgfA1GxQyKUc7XLqSuc5v8T+SzGyBN802jUdo9EViAAHFcADAENw57Ov8FX+MiZENw37Ov8ABV8pHbD5KX4RfF72cvj+SNqarF/2cvj+SNqfWYfxwxTyAA6AAeMD0Em4kX/rwV64Gvxmo5FrqapNTX+6K+d5qSTY60r5wqJXKUXB7Yu9bnuIyVxTukAADoBh4W9hPYvNGYYeFvYT2LzRTJ4SQln+n/8Ab4fmVP5skpGv9P8A+3w/MqfzZJT5HN+SzdXiAAHJYAAAAAAAAAAAAACG4c9nX/LqeUiZENw57Ov+XU8pHbD5KX4RfF/2cvj+SNqarF/2cvj+SNqfWYfxwxTyAA6AXrJSy6kIdepGPjJIsm4xXo5dqg7r1BOb7lct7RW86rMjoXAx1Ao4fs3g8/cpaTGWy8JZpXLlU2qi7r09zZAzqkqDaudzTVzV/Qc1wnY3Z606T+zLk9sXni/Bo04L81QxQAaQMbCNNzpTitOTeu7P8jJBFo3Ghs/9O8JQlZ/ozko1YTlJRbucoSd98ddzvRMjk1rwPGcsuEuDk3frjfrXSmWeKavv341PU8LL/TbWvMw0VzREadfByDiir79+NT1HFNX37/VU9Tn8XkT96HXwcg4pq+/fjU9RxTV9+/Gp6j4vIfeh18HIOKavv3+qp6jimr79+NT1HxeQ+9Dr4OQcU1ffv9VT1HFNX37/AFVPUfF5D70OwHhyDimr79/qqeo4pq+/f6qnqPi8h96HXz04/wAU1ffvxqeo4oq+/f6p+o+LyH3oddk7le9CzsgmMduhClUvayqsZxhHpeXer9iTI7xRU9+/GfqVUcCJSyqk3PsSuv2tnTF/Tr1tuUWyxML2AabjSvf25OS2aPkbI8jG5XJXJZklouPT3KV6axHpnkABYCW4nWXJhOq/ttQj8Mb7973EUpQc5KEVfKUlGK1tu5bzpdhsXA04U43XQilp0vpfjecM99Rr2QuXgucE+zxBjSyiK46YOy4K0RXKp8mfbB6H3PzJPlrWvFFFVRnFxlc4yTjJN5mmrmiaz0zscmBn4Ywe7NVcHfkPlQk+mHR4aDAPRrMWjcIAASAAAAAAAAAAAAAAAAAAAAAAAAABestmlWnGnBXym7l82+wTOhv8TcH5dR15Lk080L+mb6e5eZOTDwdZo2elGnFpZKz35m5PO2+1systa14o8+9uq20qwUZa1rxQKDEAAGNhvBatdHJzKpFZVOWqV2jY9BzqrTlCThNOMotxknpTR1mGhbCPYy4C+kR4WkrqsVnSzZcV8zthydM6ngQQHrTWZppp3NPSmeG1AAAAAAAAAAAAAAAAAAAAAAAAATzFfA3AQ4Wov6s1mTWeMdW19Jr8VsA3tWitHNppQf8AJryXeTIyZsm/7YSxKnOe0pKqnOe0pM4AADNuFx6AMOUne8/S/M8ynrfiHpe1+Z4BpcOYvK0R4Wkkqv2o5kp+ku0hU4OLcZJqSdzTVzT7UdYoc01eGcBwtavfJqpcma3KS6Ud8ebp7W4HOQZmEcHVLNLJqRu6slnjLY/kYZriYmNwgABIAAAAAAAAAAAAAABds1mlWmoU4ucn0LzepCZ1yLRLMXsXL7q1ojm0wpvp1Sn6eJsMBYtxs91SrdOrpS+zF9mt9pIXoMmTNvtU0xFJ6xlPW/EpR6Z0sumuSthVcU0+athWBTd/7MeFYAxOFlr3IcLLXuRQAMmNNNXtZ2r3nZ7wS1b2ew0LYisDGnJxd0cy8SnhZa9yPa/O7i2BVOjGtFwqRU4taJLMRnCmKOmVnl28HJ/xl6kqs/T3F8tW9q8Dk9ps06UsmpCUJapK7w1lk6rbaEakcmcIzV+iSTW8jtrxXpTz05SpvVz4eDd+800zxPkjSGA3VoxZrw5ijUX4JXPwlca2vYatPn0qkdsJXeN1x2jJWeJGOACwAHl4HoL1GyznmhTqT+GEpeSNjQxctM9MFBPpnJLNsV7KzescyNQVU6cpyyYRlKT0RinKT7kSuyYqQjnqzc31YLIj46XuJDg+xwo8mnTjBXdCz970s5WzxHHc0i2DMU51LpV3wcdOQrnN7eiO8lllsFOzwyaUVG7pztt623pM0pq81ma2S1uUsfhZa9yHCy17kUAoMrgVq3scEtW9lwAYspuLuTzLRoPOFlr3I8qc57SkCvhZa9yBQAAAAy4aFsRWABi1+d3FsAC9Z+nu+ZkAAWq/N7zGAA9hp7zKloewAQIth7Q+8hs9L2sA9DHwh4SbF/oAJvwJrS5qLdp6ADz55Ssl2z6e4AgZJRV5rPABigADOAAGHU5z2lIAAAAf/9k="
                  roundedCircle
                  style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '20px' }}
                />
              </a>
            </>
          ) : (
            <> </>
          )}
        </Navbar.Collapse>
        <AddRecModal show={show} handleClose={handleClose} />
        <LoginModal show={openLogModal} handleCloseLogin={handleCloseLogin} />
        <SignupModal show={openSignupModal} handleCloseSignup={handleCloseSignup} />
        <AddCultureModal showCulture={showCulture} handleCloseCulture={handleCloseCulture} />
        <AddLegalModal showLegal={showLegal} handleCloseLegal={handleCloseLegal} />
        <AddNovostModal showNovost={showNovost} handleCloseNovost={handleCloseNovost} />
        <AddLessonModal showLesson={showLesson} handleCloseLesson={handleCloseLesson} />
      </Navbar>
    </Container>
  );
}
