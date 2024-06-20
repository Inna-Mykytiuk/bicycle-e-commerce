import React from 'react';

interface AddToCartBtnProps {
  btnStyles: string;
  text?: string;
  icon: React.ReactNode;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  btnStyles,
  text,
  icon,
}) => {
  return (
    <button className={`${btnStyles}`} aria-label="Add to cart button">
      <p>{text}</p>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
