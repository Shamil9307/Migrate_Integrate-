// import React, { useState } from 'react';
// import { Box, Spacer, IconButton, Image, useDisclosure, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
// import {
//   AppShell,
//   Sidebar,
//   SidebarSection,
//   SidebarOverlay,
//   NavItem,
//   NavGroup,
// } from '@saas-ui/react';
// import {
//   FiHome,
//   FiUsers,
//   FiSettings,
//   FiStar,
//   FiChevronsLeft,
//   FiChevronsRight,
//   FiBook,
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { NavDropdown } from 'react-bootstrap';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import AddRecModal from './AddRecModal';
// import LoginModal from './LoginModal';
// import SignupModal from './SignupModal';
// import AddCultureModal from './AddCultureModal';
// import AddLegalModal from './AddLegalModal';
// import AddLessonModal from './AddLessonModal';
// import AddNovostModal from './AddNovostModal';

// export default function ToggleVariant(): JSX.Element {
//   const { isOpen, onToggle } = useDisclosure({
//     defaultIsOpen: true,
//   });
//   const dispatch = useAppDispatch();
//   const user = useAppSelector((store) => store.authSlice.user);

//   const [show, setShow] = useState(false);
//   const [openLogModal, setOpenLogModal] = useState(false);
//   const [openSignupModal, setOpenSignupModal] = useState(false);

//   const handleClose = (): void => setShow(false);
//   const handleShow = (): void => setShow(true);

//   const handleCloseLogin = (): void => setOpenLogModal(false);
//   const handleShowLogin = (): void => setOpenLogModal(true);
//   const handleCloseSignup = (): void => setOpenSignupModal(false);
//   const handleShowSignup = (): void => setOpenSignupModal(true);


//   const [showCulture, setShowCulture] = useState(false);
//   const handleCloseCulture = (): void => setShowCulture(false);
//   const handleShowCulture = (): void => setShowCulture(true);

//   const [showLegal, setShowLegal] = useState(false);
//   const handleCloseLegal = (): void => setShowLegal(false);
//   const handleShowLegal = (): void => setShowLegal(true);

//   const [showNovost, setShowNovost] = useState(false);
//   const handleCloseNovost = (): void => setShowNovost(false);
//   const handleShowNovost = (): void => setShowNovost(true);

//   const [showLesson, setShowLesson] = useState(false);
//   const handleCloseLesson = (): void => setShowLesson(false);
//   const handleShowLesson = (): void => setShowLesson(true);


//   const navigate = useNavigate();
//   return (
//     <AppShell
//       sidebar={
//         <Sidebar
//           toggleBreakpoint={false}
//           variant={isOpen ? 'default' : 'compact'}
//           transition="width"
//           transitionDuration="normal"
//           width={isOpen ? '280px' : '14'}
//           minWidth="auto"
//           height="100vh"
//         >
//           <SidebarSection direction={isOpen ? 'row' : 'column'}>
//             <Image
//               src="https://saas-ui.dev/favicons/favicon-96x96.png"
//               boxSize="6"
//               mb="1"
//               display={isOpen ? 'block' : 'none'}
//             />
//             <Spacer />
//             <IconButton
//               onClick={onToggle}
//               variant="ghost"
//               size="sm"
//               icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
//               aria-label="Toggle Sidebar"
//             />
//           </SidebarSection>

//           <SidebarSection flex="1" overflowY="auto" overflowX="hidden">
//             <NavGroup>
//               <NavItem icon={<FiHome />} isActive onClick={() => navigate('/lesson')}>
//                 Тренинги
//               </NavItem>
//               <NavItem icon={<FiBook />} isActive onClick={() => navigate('/legal')}>
//                 Правовая информация
//               </NavItem>
//             </NavGroup>
//             <NavItem icon={<FiBook />} isActive onClick={() => navigate('/recomendation')}>
//               Рекомендации
//             </NavItem>
//             <NavItem icon={<FiHome />} isActive onClick={() => navigate('/culture')}>
//               Культура и Досуг
//             </NavItem>
//             <NavItem icon={<FiBook />} isActive onClick={() => navigate('/news')}>
//               Новости
//             </NavItem>
//             <NavItem icon={<FiHome />} isActive>
//               Получить наставника
//             </NavItem>
//             <NavDropdown title="Добавить" id="basic-nav-dropdown">
//               <NavDropdown.Item onClick={handleShow}>Рекомендации</NavDropdown.Item>
//               <NavDropdown.Item onClick={handleShowCulture}>Культура и досуг</NavDropdown.Item>
//               <NavDropdown.Item onClick={handleShowLegal}>Правовая информация</NavDropdown.Item>
//               <NavDropdown.Item onClick={handleShowNovost}>Новости</NavDropdown.Item>
//               <NavDropdown.Item onClick={handleShowLesson}>Тренинги</NavDropdown.Item>
//             </NavDropdown> 

//           </SidebarSection>
//           <SidebarOverlay zIndex="1" />

//           <AddRecModal show={show} handleClose={handleClose} />
//         <LoginModal show={openLogModal} handleCloseLogin={handleCloseLogin} />
//         <SignupModal show={openSignupModal} handleCloseSignup={handleCloseSignup} />
//         <AddCultureModal showCulture={showCulture} handleCloseCulture={handleCloseCulture}/>
//         <AddLegalModal showLegal={showLegal} handleCloseLegal={handleCloseLegal} />
//         <AddNovostModal showNovost={showNovost} handleCloseNovost={handleCloseNovost} />
//         <AddLessonModal showLesson={showLesson} handleCloseLesson={handleCloseLesson}/>
//         </Sidebar>
//       }
//     />
//   );
// }
