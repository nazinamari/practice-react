import { Component } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchCatByBreed } from './api';
import { Cat } from './Cat';
import { CatSkeleton } from './CatSkeleton';
import { ErrorMessage } from './ErrorMessage';

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
      this.setState({ error: "Что-то пошло не так" });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { cat, isLoading, error } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.fetchCat} />
        {isLoading && <CatSkeleton />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {cat && !isLoading && <Cat cat={cat} />}
      </Layout>
    )
  };
};
