//import logo from './logo.svg';
import './App.css';
import CategoryBar from './components/category/CategoryBar';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';



function App() {
  return (
    <div >
      <PageContainer>
        <Header/>
        <CategoryBar/>
        <RouterConfig/>
        <Loading/>
      </PageContainer>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}

export default App;
