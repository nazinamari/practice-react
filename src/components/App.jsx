import { Component } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchCatByBreed } from './api';
import { Cat } from './Cat';

export class App extends Component {
  state = {
    cat: null,
    isLoading: false,
    error: null,
  };

  fetchCat = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const cat = await fetchCatByBreed(breedId)
      this.setState({ cat });
    } catch (error) {
      this.setState({error: "Что-то пошло не так"})
    } finally {
      this.setState({isLoading: false});
    }
  };

  render() {
    const { cat, isLoading, error } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.fetchCat} />
        {isLoading && <div>Loading...</div>}
        {error && <p style={{ color: 'orange' }}>{error}</p>}
        {cat && !isLoading && <Cat cat={cat} />}
      </Layout>
    )
  };
};
