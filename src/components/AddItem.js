import React, { useContext } from 'react';
import './additem.css';
import AppContext from '../AppContext';
import { useHistory } from 'react-router-dom';
const AddItem = () => {
  const history = useHistory();
  const { addItem } = useContext(AppContext);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newItem = {
      sku: e.target['sku'].value,
      name: e.target['name'].value,
      description: e.target['description'].value,
      price: e.target['price'].value,
      cost: e.target['cost'].value,
      inventory: e.target['inventory'].value,
    };
    addItem(newItem);

    history.push('/dashboard');
  };

  return (
    <>
      <h1>Add New Item</h1>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <label htmlFor='sku'>SKU: </label>
        <input required type='text' name='sku' id='sku' />
        <label htmlFor='name'>Name: </label>
        <input required type='text' name='name' id='name' />
        <label htmlFor='description'>Description: </label>
        <input required type='text' name='description' id='description' />
        <label htmlFor='price'>Price: </label>
        <input
          // pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
          type='number'
          required
          name='price'
          id='price'
        />
        <label required htmlFor='cost'>
          Cost:
        </label>
        <input
          // pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
          type='number'
          required
          name='cost'
          id='cost'
        />
        <label htmlFor='inventory'>Inventory: </label>
        <input type='number' required name='inventory' id='inventory' />
        <button type='submit'>Submit</button>

        <button
          type='button'
          onClick={() => this.props.history.push('/dashboard')}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default AddItem;
