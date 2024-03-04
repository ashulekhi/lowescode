import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your Redux store
import Cakelist from './Components/Cakelist';

// Mocking axios get method
jest.mock('axios');

describe('Cakelist component', () => {
  it('renders loader while fetching cakes', async () => {
    // Mocking Axios get method
    axios.get.mockResolvedValueOnce({
      data: {  // Make sure the structure matches the actual response
        data: [
          { id: 1, name: 'Cake 1', flavor: 'Chocolate' },
          { id: 2, name: 'Cake 2', flavor: 'Vanilla' },
        ],
      },
    });
  
    // Render the component
    const { getByTestId } = render(
      <Provider store={store}> {/* Provide the Redux store */}
        <Cakelist />
      </Provider>
    );
  
    // Check if loader is rendered
    expect(getByTestId('loader')).toBeInTheDocument();
  
    // Wait for component to finish fetching data
    await waitFor(() => {
      // Check if cake list is rendered
      expect(getByTestId('cake-list')).toBeInTheDocument();
    });
  });
  
  xit('renders list of cakes after fetching', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        data: [
          { id: 1, name: 'Cake 1', flavor: 'Chocolate' },
          { id: 2, name: 'Cake 2', flavor: 'Vanilla' },
        ],
      },
    });

    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}> {/* Provide the Redux store */}
        <Cakelist />
      </Provider>
    );
    await waitFor(() => {
      expect(getByTestId('cake-list')).toBeInTheDocument();
      expect(getAllByTestId('cake')).toHaveLength(2);
    });
  });
});
