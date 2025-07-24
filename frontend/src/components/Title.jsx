import React from "react";

const Title = ({ title1, title2, titleStyles, paraStyles }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${titleStyles} h2`}>
        {title1}
        <span className="text-secondary !font-light">{title2}</span>
        <p className={`${paraStyles} hidden`}>
          From timeless classics to modern masterpieces, find the <br />
          perfect read for every moment
        </p>
      </h2>
    </div>
  );
};

export default Title;
