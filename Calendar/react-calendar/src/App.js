import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return (
      <div className="App">
        <header>
            <div class="form-group">
              <div className="header-icon"></div>
              <input type="text" id="dynamic-label-input" className='header-input' placeholder="Событие, дата или участок" />
            </div>
        </header>
          <button onChange={this.handleChange} class='header-add-button'>Добавить</button>
          <button class='header-refresh-button'>Обновить</button>
        <main> 
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
//
