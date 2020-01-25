import debounce from 'lodash';
import React,{ Component } from "react";

export default class Sea extends Component {
    state = {
        q: '',
        places: [],
    }
    fetchPlaces(q) {
       /* get(`http://www.example.com/places/`, {
            params: {q}
        }).then(response => {
           8 this.setState({places: response.data.places});
        });*/
        console.log(q);
    }
    constructor(props) {
        super(props);
        this.fetchPlaces = debounce(this.fetchPlaces, 200);
    }
    onSearchChange(ev) {
        const q = ev.target.value;
        this.setState({q: q});
        this.fetchPlaces(q);
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.q}
                    onChange={this.onSearchChange.bind(this)}
                    placeholder="Search for a place"
                />
                {this.state.places.map(place => (
                    <div key={place.id} className="placePick">
                        <a href={`?place_id=${place.id}`}>{place.name}</a>
                    </div>
                ))}
            </div>
        );
    }
}