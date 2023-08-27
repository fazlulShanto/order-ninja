import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TempLayout from './pages/TempLayout';
import LandingPage from './pages/LandingPage';

const App = () => {
 return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<TempLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='register' element={<Register />} />
        <Route path='404' element={<Register />} />
        <Route path='login' element={<Login />} />
        {/* <Route path="login" element={<Login />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
      {/* <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route> */}
      {/* <Route path="contact-us" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
 )
 };

export default App;