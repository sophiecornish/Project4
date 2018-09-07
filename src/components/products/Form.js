import React from 'react';

function ProductForm({ handleSubmit, handleChange, product }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="product"> Product Name </label>
        <input className="input" name="product"
          placeholder="eg.LONG SLIM-FIT BLAZER"
          value={product.product || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="category"> Category </label>
        <input className="input" name="category"
          placeholder="eg. Coats and Jackets"
          value={product.category || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="price"> Price</label>
        <input className="input" name="price"
          placeholder="eg. 125"
          value={product.price || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="colour"> Colour</label>
        <input className="input" name="colour"
          placeholder=" eg. Midnight Blue"
          value={product.colour || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="colourHex"> Colour Code</label>
        <input className="input" name="colourHex"
          placeholder="eg. #343f51"
          value={product.colourHex || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="gender"> Gender</label>
        <input className="input" name="gender"
          placeholder="Men's || Women's"
          value={product.gender || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="description"> Description</label>
        <input className="input" name="description"
          placeholder="eg. With an authentic appearance and long-lasting performance at the forefront, these skinny jeans are cut from soft denim with comfortable stretch. A high-waisted fit in a 30 inch leg length, they have front and back pockets, a zip fly fastening and matte metal hardware."
          value={product.description || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="primaryImgUrl"> Main Image (URL)</label>
        <input className="input" name="primaryImgUrl"
          placeholder="eg. http://..."
          value={product.primaryImgUrl || ''}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="imgUrl"> Other Images (URL)</label>
        <input className="input" name="imgUrl"
          placeholder="eg. http://... (separated by commas)"
          value={product.imgUrl || ''}
          onChange={handleChange}
        />
      </div>

      <button className="button is-rounded is-info is-outlined"> Submit</button>
    </form>
  );
}

export default ProductForm;
