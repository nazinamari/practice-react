import { Component } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchCatByBreed } from './api';
import { Cat } from './Cat';

export class App extends Component {
  state = {
    cat: null,
  };

  fetchDog = async breedId => {
    try {
      const cat = await fetchCatByBreed(breedId)
      this.setState({ cat });
    } catch (error) {

    }
  };
  render() {
    const { cat } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.fetchDog} />
        {cat && <Cat cat={this.state.cat}/>}
      </Layout>
    )
  };
};
