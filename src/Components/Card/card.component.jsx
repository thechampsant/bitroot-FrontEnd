import '../Card/card.scss';

const Card = (props) => {
    const dModal = () =>{
        console.log(props.item);
        if(props.item.id === 4)
            props.displayModal('modal-View',props.item);
        
    }
    const convertT =(timeStamp) =>{
        var timestamp = timeStamp
        var date = new Date(timestamp);
        return date.toDateString()
    }
    return(
        <div className='card'>
            <div className="card__details">
                <div className={props.item.id === 4 ? 'card__details--image-modal': 'card__details--image'}>
                    <img src={props.item.thumbnail.small} alt="tubmnail" className='card__details--image-src'/>
                    <div className='modal-view'>
                        &nbsp;
                    </div>
                    <div className='modal-text' onClick={dModal}>
                        Learn More
                    </div>
                </div>
                <div className="card__details--content">
                    <div className="content--heading">
                        <div className="circle">
                        </div>
                        <h1 className={props.item.id === 4 ? 'hover-state':''} onClick={dModal}>{props.item.title}</h1>
                    </div>
                    <div className="content--context">
                        <p>{props.item.content}</p>
                    </div>
                    <div className="content--description">
                        <p>{props.item.author.name} - {props.item.author.role}</p>
                        <p>{convertT(props.item.date)}</p>
                    </div>
                </div>
            </div>
    
        </div>
        )
}

export default Card;