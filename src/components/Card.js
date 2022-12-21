import Button from "./Button/Button"
function Card(props){
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <h3>$ {props.price}</h3>
                <img height="220px" src={props.img} alt={props.title} />
                <br />
                <small>$ {props.detail}</small>
                <br />
                <Button text ="Comprar" />
            </div>
        </>
    );
}

export default Card;