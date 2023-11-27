import { useDispatch } from "react-redux";
import { MDBIcon } from "mdb-react-ui-kit";
import {
  decreaseItem,
  increaseItem,
  remove,
} from "../features/carts/cartSlice";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ width: "70vw", maxWidth: "90rem", margin: "30px auto" }}>
      <div className="row" style={{ marginTop: "10px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={img}
            alt={title}
            className="img-fluid"
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2">
          <h5>{title}</h5>
          <h5 style={{ color: "#617d98" }}>${price}</h5>
          <MDBIcon
            fas
            icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <MDBIcon
            fas
            icon="chevron-up"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseItem(id))}
          />
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <MDBIcon
            fas
            icon="chevron-down"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decreaseItem(id))}
          />
        </div>
      </div>
    </div>
  );
};
