import react, { Component } from "react";
import "./Search.css";
import Spinner from "../../utility/Spinner/Spiner";
import "../Home/Home.css";

import axios from "axios";
import Cities from "../../utility/City/Cities";
import promise from "redux-promise";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

class Search extends Component {
  state = {
    activities: [],
    cities: [],
    venues: [],
    apiResponse: false,
  };
  async componentDidMount() {
    const searchTerm = this.props.match.params.searchTerm;
    const url = `${window.apiHost}/search/${searchTerm}`;
    const resp = await axios.get(url);
    this.setState({
      activities: resp.data.activities,
      cities: resp.data.cities,
      venues: resp.data.venues,
      apiResponse: true,
    });
  }

  render() {
    if (!this.state.apiResponse) {
      return <Spinner />;
    }
    return (
      <div className="container-fluid lower-fold">
        <div className="row">
          <div className="col s12">
            <Cities cities={this.state.cities} header="Cities Matching your search" />
          </div>
          <div className="col s12">
            <Activities
              activities={this.state.activities}
              header="Activities Matching your search"
            />
          </div>
          <div className="col s12">
            <Venues venues={this.state.venues} header="Venues Matching your search" />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
