import SubHeading from "../subheadinig/Subheading"
import  MenuItems  from '../menuItems/MenuItem'
import menu from '../../assets/images/menu.png'
import data from './data'
import './SpecialMenu.css'

export default function SpecialMenu(){
    return(
        <div className='app__specialMenu flex__centre section__padding' id='menu'>
            <div className='app__specialMenu-title'>
                <SubHeading title='Menu that fits your palatte'/>
                <h1 className="headtext__cormorant">Today's Special</h1>
            </div>

            <div className="app__speicalMenu-menu">
                <div className="app__specialMenu-menu_wine flex__centre">
                    <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                    <div className="app__specialMenu-menu_items">
                        {data.wines.map((wine,index)=>{
                            return(<MenuItems key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>)
                        })}
                    </div>
                </div>

                <div className="app__speicalMenu-menu_img">
                    <img src={menu}/>
                </div>

                <div className="app__specialMenu-menu_cocktails flex__centre">
                    <p className="app__specialMenu-menu_heading">Cocktails</p>
                    <div className="app__specialMenu-menu_items">
                        {data.cocktails.map((coctail,index)=>{
                            return(<MenuItems key={coctail.title + index} title={coctail.title} price={coctail.price} tags={coctail.tags}/>)
                        })}
                    </div>
                </div>
            </div>

            <div style={{marginTop: ' 15px'}}>
                <button type="button" className="custom__button">View More</button>
            </div>
        </div>
    )
}