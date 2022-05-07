import "./style.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const CartButton = () => {
  return (
    <div className="flex add-to-cart-btn-wishlist">
      <div className="flex book-mark-icon">
        <BookmarkBorderIcon />
      </div>
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  );
};

export default CartButton;
