import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTeacher } from '../services';
import  './style.css';

class FormAddTeacher extends Component {

  componentWillMount() {
    this.state = {
      name: '',
      count: '',
    };

    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleClickAddBtn() {
    this.setState({validationError: null});
    this.props.onAdd({
      name: this.state.name,
      description: this.state.description,
    }).catch((err) => {
      this.setState({validationError: err});
    });
  }

  handleChangeName(event) {
    const target = event.target;
    this.setState({name: target.value});
  }

  handleChangeDescription(event) {
    const target = event.target;
    this.setState({description: target.value});
  }

  render() {
    const errorClassName = this.state.validationError ? 'form--invalid' : '';
    return (
      <div className={`form container--inline teacher-form ${errorClassName}`}>
        <div className="container--column">
          <div className="teacher-form__top-fields container--inline">
            <input
              className="field form__field"
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <button
              className="button"
              onClick={this.handleClickAddBtn}
            >
              add
            </button>
          </div>
          <textarea
            className="field form__field field--textarea"
            value={this.state.description}
            placeholder="description"
            onChange={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}

FormAddTeacher.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  validationError: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (payload) => dispatch(addTeacher(payload)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(FormAddTeacher);
