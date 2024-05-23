import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    
    render() {
        return (
            // <input type="text"
            //         className="form-control search-input"
            //         placeholder="Найти сотрудника"
            //         value={this.state.term}
            //         onChange={this.onUpdateSearch}/> 
            <header>
                <div className='SF'>
                    <input type="text"
                        className="form-control search-input"
                        placeholder="Search for"
                        value={this.state.term}
                        onChange={this.onUpdateSearch}/> 
                    <button>Filters</button>
                {/* <div class="user-info">
                    <span>Olivia Rhye</span>
                    <span>Admin</span>
                </div> */}
                </div>
            {/* <input type="text"
                    className="form-control search-input"
                    placeholder="Search for"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/> 
                <button>Filters</button> */}
                <div class="user-info">
                    <span>Olivia Rhye</span>
                    <span>Admin</span>
                </div>
            </header>
        )
    }
}

export default SearchPanel;