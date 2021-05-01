import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './layout/public/PublicRoute';
import Home from './layout/public/components/Home/Home';
import './App.css';
import Navbar from './layout/public/components/Navbar/Navbar';
import EasterHome from './layout/public/components/Easter/EasterHome';
import EasterBasket from './layout/public/components/Easter/EasterBasket/EasterBaket';
import ItemDetails from './layout/public/components/Item/ItemDetails';
import { getItems } from './Service/Service';
import Cart from './layout/public/components/Cart/Cart';

class App3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sideDrawerOpen: false,
      cartItems: [],
      sumCart: 0,
      // sortType: "asc",
      // filteredItems: [],
      items: [],
      details: {},
    }

    this.handleItemDetails = this.handleItemDetails.bind(this);
    // this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    // this.backdropClickHandler = this.backdropClickHandler.bind(this);
    // this.sort = this.sort.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.sum = this.sum.bind(this);
    // this.removeAllIngFromBasket = this.removeAllIngFromBasket.bind(this);
  }

  componentDidMount() {
    getItems().then(res => res.data)
      .then(data => {
        let items = data.products.sort(function (a, b) {
          return b.date - a.date
        })
        this.setState({
          items: items
        })
        if (localStorage.getItem('cartItems')) {
          this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) })
        }
      });
  }



  handleItemDetails = (e, item) => {
    let details = { ...item }
    this.setState({ details: details })
  }

  sum = () => {
    const cartItems = this.state.cartItems;
    if (cartItems.lenght > 0) {
      var total = cartItems.reduce(function (prev, cur) {
        return prev + cur.cena;
      }, 0);
      console.log(total);
      this.setState({ sumCart: total })
    }
  }


  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen }
  //   })

  // }

  // backdropClickHandler = () => {
  //   this.setState({ sideDrawerOpen: false })
  // }

  // sort = (sortType) => {
  //   if (sortType === "asc") {
  //     this.setState({
  //       filteredIngredients: this.state.filteredIngredients.sort(function (a, b) {
  //         return a.calories - b.calories
  //       }), sortType: "asc"
  //     });
  //   } else if (sortType === "desc") {
  //     this.setState({
  //       filteredIngredients: this.state.filteredIngredients.sort(function (a, b) {
  //         return b.calories - a.calories
  //       }), sortType: "desc"
  //     });
  //   }
  // }

  // handleSearch(e) {
  //   const searchValue = e.target.value
  //   let copyList = [...this.state.ingredients];
  //   let filtered = copyList.filter(ingredient =>
  //     ingredient.name.toLowerCase().startsWith(searchValue.toLowerCase()))
  //   this.setState({
  //     filteredIngredients: filtered
  //   })
  // }


  handleAddCart(e, det) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let itemAlreadyInCart = false;
      cartItems.forEach(element => {
        if (element._id === det._id && element.color === det.color && element.precnik === det.precnik) {
          itemAlreadyInCart = true;
          element.kolicina = det.kolicina
          element.cena = det.cena
        }
        // if (itemAlreadyInCart === true) {
        //   var sum = element.kolicina + det.kolicina
        //   element.kolicina = sum
        // }

      });
      if (!itemAlreadyInCart) {
        cartItems.push({ ...det });
      }
      console.log(cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }


  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      const index = cartItems.filter(element => element._id === item._id && element.precnik === item.precnik).map(el => el._id).indexOf(item._id);
      if (index > -1) { cartItems.splice(index, 1); }
      // var total = cartItems.reduce(function (prev, cur) {
      //   return prev - cur.cena;
      // }, 0);
      // console.log(total);
      // this.setState({ sumCart: total })
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return cartItems;
    })
  }

  // removeAllIngFromBasket() {
  //   this.setState(state => {
  //     let cartItems = state.cartItems;
  //     cartItems = [];
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //     return cartItems;
  //   })
  // }


  render() {
    // let backdrop;
    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />
    // }

    // const [details, setDetails] = useState({})


    // const handleClickColseDetails = (e) => {
    //   setDetails({})
    // }

    // function isEmpty(details) {
    //   for (var key in details) {
    //     if (details.hasOwnProperty(key))
    //       return false;
    //   }
    //   return true;
    // }

    return (
      <>
        <Router>
          <Navbar cartItems={this.state.cartItems} />
          <Switch>
            <PublicRoute exact path="/korpa">
              <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} sumCart={this.state.sumCart} />
            </PublicRoute>
            <PublicRoute exact path="/proizvod/:title">
              <ItemDetails details={this.state.d} handleAddCart={this.handleAddCart} />
            </PublicRoute>
            <PublicRoute exact path="/uskrs/korpe">
              <EasterBasket data={this.state.items} handleItemDetails={this.handleItemDetails} details={this.state.d} />
            </PublicRoute>
            <PublicRoute path="/uskrs">
              <EasterHome cartItems={this.state.cartItems} data={this.state.items} />
            </PublicRoute>
            <PublicRoute path="/">
              <Home data={this.state.items} />
            </PublicRoute>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App3;
