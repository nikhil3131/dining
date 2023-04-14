import SubHeading from "../subheadinig/Subheading";
import welcome from "../../assets/images/welcome.png"
import './Header.css'

export default function Header(){
    return(
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavour"/>
                <h1 className="app__header-h1">The key to fine Dining</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>
                    Sit tellus lobortis sed sensectus vivamus molestie.
                    Condlimentum volutpat morbi facilisis quam scelerisque
                    sapien. Et,penatibus aliquam amet tellus
                </p>
                <button type="button" className="custom__button">Explore Menu</button>
            </div>

            <div className="app__wrapper_img">
                <img src={welcome} alt=""/>
            </div>
        </div>
    )
}