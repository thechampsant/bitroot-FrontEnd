import '../Container/container.scss';
import Card from '../Card/card.component';

const Container = (props) => {
    return(
        <div className="container">
            {
                props.data.map((value,key) =>{
                    return <Card key={key} item={value} displayModal={props.displayModal}/>
                })
            }
        </div>
    )
}

export default Container;