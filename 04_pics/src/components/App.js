import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization: "Client-ID 8f963700517eb3bed42120eef3cb86dbe68052ea1f6cb81797e1a4761195e9cb"
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
