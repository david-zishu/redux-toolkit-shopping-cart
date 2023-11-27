import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Redux-Tooklit Shopping Cart
          </MDBNavbarBrand>
          <MDBNavbarLink>
            <a className="mx-3">
              <MDBIcon fas icon="shopping-cart" size="lg" color="white">
                <MDBBadge
                  pill
                  color="danger"
                  notification
                  style={{ fontSize: "12px" }}
                >
                  {totalCount}
                </MDBBadge>
              </MDBIcon>
            </a>
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
