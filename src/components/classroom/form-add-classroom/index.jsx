import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addClassroom } from '../actions';
import  './style.css';

class FormAddClassroom extends Component {

  componentWillMount() {
    this.state = {
      name: '',
      count: '',
      description: '',
    };

    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCount = this.handleChangeCount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleClickAddBtn() {
    this.props.onAdd({
      name: this.state.name,
      count: this.state.count,
      description: this.state.description,
    });
  }

  handleChangeDescription(event) {
    const target = event.target;
    this.setState({description: target.value});
  }

  handleChangeName(event) {
    const target = event.target;
    this.setState({name: target.value});
  }

  handleChangeCount(event) {
    const target = event.target;
    this.setState({count: target.value});
  }

  render() {
    return (
      <div className="form container--inline classroom-form">
        <div className="container--column">
          <div className="container--inline classroom-form__top-fields">
            <input
              className="field form__field"
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <input
              className="field form__field field--count"
              type="text"
              value={this.state.count}
              placeholder="count"
              onChange={this.handleChangeCount}
            />
            <button
              className="button"
              onClick={this.handleClickAddBtn}
            >
              add
            </button>
          </div>
          <textarea
            value={this.state.description}
            className="field form__field field--textarea"
            placeholder="description"
            onChange={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}

FormAddClassroom.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};

export default connect(
  null,
  { onAdd: addClassroom },
)(FormAddClassroom);
