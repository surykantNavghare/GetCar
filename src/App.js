import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Service';
import Payment from './components/Payment';
import BrandTemplate from './components/BrandCarsTemplate';
import CarTemplate from './components/CarTemplate';
import allcars from './JSON/Allcars.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <HashRouter>
        <AppBar position="static" style={{ backgroundColor: 'var(--first)', height: '16vh' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', mr: 1 }}>
                <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} style={{ height: '80px', width: '80px', margin: '0 13px' }} alt='Logo' />
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    textAlign: 'center',
                    color: 'var(--third)',
                    textDecoration: 'none',
                  }}
                >
                  GetCar.com
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="open navigation"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="links" to="/">Home</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="links" to="/about">About</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="links" to="/service">Service</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="links" to="/payment">Payment</Link>
                  </MenuItem>
                </Menu>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} style={{ height: '80px', width: '80px' }} alt='Logo' />
              </Box>
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  color: 'var(--third)',
                  textDecoration: 'none',
                }}
              >
                GetCar.com
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/service">Service</Link>
                <Link className="links" to="/payment">Payment</Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/payment" element={<Payment />} />
          {allcars.map((brand) => (
            <Route key={brand.brand} path={`/${brand.brand}`} element={<BrandTemplate brand={brand.brand} />} />
          ))}
          {allcars.map((all) => (
            all.cars.map((brandCars) => (
              <Route key={brandCars.name} path={`/${all.brand}/${brandCars.name}`} element={<CarTemplate brand={all.brand} brandCars={brandCars} />} />
            ))
          ))}
        </Routes>
      </HashRouter>
      <div className='container-fluid' data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
