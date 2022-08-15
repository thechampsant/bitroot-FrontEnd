import '../Modal/modal.scss';

const Modal = (props) =>{

    console.log(props.item);
    return(
        <div className="modal">
            <div className={props.name}>
            </div>
            <div className="modal-card">
                <div className='close' onClick={() => props.displayModal('modal-None')}>&#x2715;</div>
                <div className="image">
                    {props.item && <img src={props.item.thumbnail.large} alt='' className='image-item'/>}
                </div>
                <div className="context">
                    <div className="content">
                    {props.item && <h1>{props.item.title}</h1>}
                    {props.item && <p>{props.item.content}</p>}
                    </div>
                    <div className="author">
                        {props.item && <img src={props.item.author.avatar} alt='image' className='author--avatar'/>}
                        {props.item && <p>{props.item.author.name} - {props.item.author.role}</p>}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal