import g from '../../assets/images/G.png'
import spoon from '../../assets/images/spoon.svg'
import knife from '../../assets/images/knife.png'
import './AboutUs.css'
export default function AboutUs(){
    return(
        <div className='app__aboutus app__bg flex__center space__padding' id='about'>
            <div className='app__aboutus-overlay flex__centre'>
                <img src={g}/>
            </div>
            <div className='app__aboutus-content flex__centre'>
                <div className='app__aboutus-conent_about'>
                    <h1 className='headtext__cormorant'>About Us</h1>
                    <img src={spoon}/>
                    <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptas est suscipit asperiores eligendi optio commodi vitae ipsa illum!</p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>

                <div className='app__aboutus-content_knife flex__centre'>
                    <img src={knife}/>
                </div>

                <div className='app__aboutus-conent_history'>
                    <h1 className='headtext__cormorant'>Our History</h1>
                    <img src={spoon}/>
                    <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptas est suscipit asperiores eligendi optio commodi vitae ipsa illum!</p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>
        </div>
    )
}