import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Dropdown, Menu } from 'semantic-ui-react';

import { countries } from './constants/countryList';
import { categories } from './constants/categories';
import  image  from './components/news-icon.png';
import { URL, KEY } from './constants/constants';
import { itemsFetchData, changeCountry, changeCategory } from './actions';
import News from './components/News'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchData(URL+"country="+this.props.country+"&category="+this.props.category+"&pageSize=15&apiKey="+KEY+"&page=1")
  }

  componentDidUpdate(prevProps) {
    if(this.props.country!==prevProps.country || this.props.category!==prevProps.category)
      this.props.fetchData(URL+"country="+this.props.country+"&category="+this.props.category+"&apiKey="+KEY)
  }


  render() {
    return (
    <div style={{backgroundImage:'url("https://pooreboysingray.files.wordpress.com/2014/11/mobile-tribune-18640001.jpg")',backgroundSize:'auto',flex:'1'}}>
      <Menu fluid stackable inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              src={image}
              size="mini"
              style={{ marginRight: '1em' }}
            />
            Headlines Today
          </Menu.Item>
          <Dropdown openOnFocus inline item placeholder='Category' options={ categories } onChange = {(ev, {value} ) => this.props.changeCategory(value) } />
          <Dropdown openOnFocus inline item placeholder='Country' value={this.props.country} options={ countries } onChange = {(ev, {value} ) => this.props.changeCountry(value) } />
        </Container>
      </Menu>
      <News />
    </div>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCountry: (countryName) => dispatch(changeCountry(countryName)),
    changeCategory: (categoryName) => dispatch(changeCategory(categoryName)),
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
