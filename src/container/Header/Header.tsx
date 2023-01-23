import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import logo from 'assets/logo.svg'
import CartHeader from 'components/CartHeader/CartHeader'



const Header = () => {
  return (
    <AppBar position="static"
    className="app-bar"    >
        <Container maxWidth = "lg">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <Menu/>
            <CartHeader/>

            </Toolbar>
            </Container>
        </AppBar>

  )
}

export default Header