import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Card from './Cards/Card';


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div className='body row g-0'>
        <Card
          name='Starter'
          pack='Free'
          due='Forever'
          btn='Starter'
          no={1}
          clsno={1}
          crtbtn={1}
          />
          
        <Card
          name='Figma Professional'
          pack='$12 per seat/month'
          due='Billed annually or $15 month'
          btn='Professional'
          link='Free for students and educators'
          no={2}
          clsno={2}
          crtbtn={2}
        />
        <Card
          name='Figma Organization'
          pack='$45 per seat/month'
          due='Annual billing only'
          btn='Organization'
          link='Contact sales'
          no={3}
          clsno={3}
          crtbtn={3}

        />
        <Card
          name='Enterprise'
          pack='$75 per seat/month'
          due='Annual billing only'
          btn='Contact Sales'
          link='Learn more'
          no={4}
          clsno={4}
          crtbtn={4}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
