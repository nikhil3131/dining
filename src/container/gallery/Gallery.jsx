import React from 'react'
import SubHeading from '../subheadinig/Subheading'
import gallery1 from '../../assets/images/gallery01.png'
import gallery2 from '../../assets/images/gallery02.png'
import gallery3 from '../../assets/images/gallery03.png'
import gallery4 from '../../assets/images/gallery04.png'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css'

const images = [gallery1, gallery2, gallery3, gallery4]

export default function Gallery(){
    const scrollRef = React.useRef(null)
    
    function scroll(direction){
        const { current } = scrollRef;

        if(direction === 'left'){
            current.scrollLeft -= 300; 
        }else{
            current.scrollRigt +=300;
        }
    }

    return(
        <div className='app__gallery flex__center'>
            <div className='app__gallery-content'>
                <SubHeading title="Instagram"/>
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora beatae obcaecati accusantium cum minus molestiae dignissimos, dolorem facere distinctio.
                </p>
                <button type='button' className='custom__button'>View More</button>
            </div>

            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={scrollRef}>
                    {images.map((image,index)=>(
                        <div className='app__gallery-images_card flex__centre' key={`gallery_image-${index+1}`}>
                            <img src={image}/>
                            <BsInstagram className='gallery__image-icon'/>
                        </div>
                    ))}
                </div>
                {/* <div className='app__gallery-images_arrow'>
                    <BsArrowLeftShort className='gallery__arrow-icon'onClick={()=>scroll('left')}/>
                    <BsArrowRightShort className='gallery__arrow-icon'onClick={()=>scroll('right')}/>
                </div> */}
            </div>
        </div>
    )
}