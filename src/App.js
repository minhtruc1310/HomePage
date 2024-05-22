import './App.css';
import Header from './modules/header/component/header_component';
import About from './modules/about/component/about_component';
import Footer from './modules/footer/component/footer_component';
import Banner from './modules/banner/component/banner_component';
import Feature from './modules/feature/component/feature_component';
import Reference from './modules/reference/component/reference_component';
import Blog from './modules/blog/component/blog_component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Feature/>
      <Reference/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
