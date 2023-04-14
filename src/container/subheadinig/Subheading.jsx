import spoon from '../../assets/images/spoon.svg'


export default function SubHeading(prop){
    return(
        <div style={{marginBottom: '1rem'}}>
            <p className="p__cormorant">{prop.title}</p>
            <img src={spoon} alt='spoon' className='spoon__img'/>
        </div>
    )
}