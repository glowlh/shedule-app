import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLecture } from '../services';
import './style.css';

class FormAddLecture extends Component {

  componentWillMount() {
    this.state = {
      name: '',
      schools: [],
      teacher: '',
      classroom: '',
      dateFrom: '',
      dateTo: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
    this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeTeacher = this.handleChangeTeacher.bind(this);
    this.handleChangeClassroom = this.handleChangeClassroom.bind(this);
    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
  }

  handleChangeName(event) {
    const target = event.target;
    this.setState({name: target.value});
  }

  handleChangeDateFrom(event) {
    const target = event.target;
    this.setState({dateFrom: target.value});
  }

  handleChangeDateTo(event) {
    const target = event.target;
    this.setState({dateTo: target.value});
  }

  handleChangeSchool(event) {
    const target = event.target;
    this.setState({schools: [target.value]});
  }

  handleChangeTeacher(event) {
    const target = event.target;
    this.setState({teacher: target.value});
  }

  handleChangeClassroom(event) {
    const target = event.target;
    this.setState({classroom: target.value});
  }

  handleClickAddBtn() {
    this.props.onAdd({
      name: this.state.name,
      dateFrom: this.state.dateFrom,
      dateTo: this.state.dateTo,
      schools: this.state.schools,
      teacher: this.state.teacher,
      classroom: this.state.classroom,
    }).catch((err) => {
      console.warn(err);
    });
  }

  render() {
    return (
      <div className={`form`}>
        <div className="container--inline form__row">
          <input
            className="field form__field"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            className="field form__field"
            type="text"
            placeholder="date from"
            value={this.state.dateFrom}
            onChange={this.handleChangeDateFrom}
          />
        </div>
        <div className="container--inline form__row">
          <input
            className="field form__field"
            type="text"
            placeholder="date to"
            value={this.state.dateTo}
            onChange={this.handleChangeDateTo}
          />
          <select className="field form__field" onChange={this.handleChangeSchool}>
            {!this.state.schools.length && <option selected="selected">school</option>}
            {this.props.schoolList && this.props.schoolList.map((it, id) => {
              return (
                <option value={it.name} key={`school-${id}`}>{it.name}</option>
              )
            })}
          </select>
        </div>
        <div className="container--inline form__row">
          <select className="field form__field" onChange={this.handleChangeTeacher}>
            {!this.state.teacher && <option selected="selected">teacher</option>}
            {this.props.teacherList && this.props.teacherList.map((it, id) => {
              return (
                <option value={it.name} key={`teacher-${id}`}>{it.name}</option>
              )
            })}
          </select>
          <select className="field form__field" onChange={this.handleChangeClassroom}>
            {!this.state.classroom && <option selected="selected">classroom</option>}
            {this.props.classroomList && this.props.classroomList.map((it, id) => {
              return (
                <option value={it.name} key={`classroom-${id}`}>{it.name}</option>
              )
            })}
          </select>
        </div>

        <button
          className="button"
          onClick={this.handleClickAddBtn}
        >
          add
        </button>
      </div>
    )
  }
}

FormAddLecture.propTypes = {
  schoolList: React.PropTypes.array,
  classroomList: React.PropTypes.array,
  teacherList: React.PropTypes.array,
  onAdd: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    schoolList: state.schools,
    classroomList: state.classrooms,
    teacherList: state.teachers,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (payload) => dispatch(addLecture(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAddLecture);
