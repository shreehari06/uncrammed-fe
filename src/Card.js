import './Card.css'

const Card = (props) => {

return (
     <div className="card--container">
          <div className="card--icon-container">
               <img src={props.imgSrc} alt=""/>
          </div>
          <div className="card--text-container">
               {props.children}
          </div>
     </div>
     );
}
export default Card;
