import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Home = ({ onAddReview, onSearchElectronics }) => {
    return (
        <div>
            <Header/>
            <Body onAddReview={onAddReview} onSearchElectronics={onSearchElectronics}/>
            <Footer/>
        </div>
    )
}

export default Home
