import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'


type Props = {}

const Main = (props: Props) => {
  return (
    <main
    style={{
        padding:'40px 0',
    }}>
    <Container maxWidth='lg'>
    <Home />
    </Container>
    </main>
  )
}

export default Main