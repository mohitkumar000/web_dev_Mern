import {useState} from "react";

function Card({ id, image, info, price, name ,removeTour}) {

    const [readmore, setReadmore] = useState(false);

    //const description = `${info.substring(0, 200)}....`
    const description=0;

    function redmoreHandler() {
        setReadmore(!readmore);
    }



    return (
        <>
            <div className="card">
                <img src={image} alt="" className="image" />
                <div className="tour-info">
                    <div className="tour-details">
                        <h4 className="tour-price">{price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>
                    <div className="description">
                        {description}
                        <span className="readmore" onClick={redmoreHandler}>
                            {readmore ? `show less` : `Read more`}
                        </span>
                    </div>
                </div>
                <button className="btn-red" onClick={() => removeTour(id)}>
                    not interested

                </button>



            </div>

        </>
    );


}

export default Card;