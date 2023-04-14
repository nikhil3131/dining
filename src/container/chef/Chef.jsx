import './Chef.css'
import chef from '../../assets/images/chef.png'
import sign from '../../assets/images/sign.png'
import quote from '../../assets/images/quote.png'
import SubHeading from '../subheadinig/Subheading'

export default function Chef(){
    return(
        <div className='app__bg app__wrapper section__padding'>
            <div className='app__wrapper_img app__wrapper_img-reverse'>
                <img src={chef} alt="chef" />
            </div>

            <div className='app__wrapper_info'>
                <SubHeading title="Chef's Word"/>
                <h1 className='headtext__cormorant'>What We Believe In</h1>
                <div className='app__chef-content'>
                    <div className='app__chef-content_quote'>
                        <img src={quote} alt="sign" />
                        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sapiente.</p>
                    </div>
                    <p className='p__opensans'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe provident animi id ut optio cum, voluptates similique at aliquam voluptate illo corporis? Aspernatur vel temporibus incidunt sequi? Suscipit, mollitia!
                    </p>
                </div>

                <div className='app__chef-sign'>
                    <p>Kevin Lou</p>
                    <p className='p__opensans'>Chef & Founder</p>
                    <img src={sign} alt="sign" />
                </div>

            </div>
        </div>
    )
}