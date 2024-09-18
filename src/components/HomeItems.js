import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const HomeItems = ({ item }) => {

    const dispatch = useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elemFound = bagItems.indexOf(item.id) >= 0;

    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
    };
    const handleRemoveToBag = () => {
        dispatch(bagActions.removeToBag(item.id));
    };

    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="Not Found" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>

            {elemFound ? <button type="button"
                className="btn btn-danger btn-add-bag"
                onClick={handleRemoveToBag}>
                <MdDelete />  Remove
            </button> :

                <button type="button"
                    className="btn btn-success btn-add-bag"
                    onClick={handleAddToBag}>
                    <GrAddCircle />
                    Add to Bag
                </button>
            }
        </div>
    );
};
export default HomeItems;