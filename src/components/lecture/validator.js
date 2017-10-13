class LectureValidator {

  validate(spec, store) {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });

    this.errors = [];
    this.valid = true;
    const {dateFrom: from, dateTo: to} = spec;

    this._isValidCount(spec, store);
    this._isValidFromDate(from);
    this._isValidToDate(to);
    this._isValidLecture(spec, store);

    if (this.valid) {
      deferred.resolve({ valid: this.valid });
    } else {
      deferred.reject({
        valid: this.valid,
        errors: this.errors,
      });
    }

    return deferred.promise;
  }

  _isValidFromDate(from) {
    if (Date.parse(from) < 0 || isNaN(Date.parse(from))) {
      this.errors.push(`'From' date ${from} is not valid`);
      this.valid = false;
    }
  }

  _isValidToDate(to) {
    if (Date.parse(to) < 0 || isNaN(Date.parse(to))) {
      this.errors.push(`'To' date ${to} is not valid`);
      this.valid = false;
    }
  }

  _isValidLecture(spec, store) {
    if (!this.valid) {
      return;
    }

    const lectures = [];
    const from = spec.dateFrom;
    const to = spec.dateTo;
    const lecturesByInterval = this._findLectureByDate({ from, to }, store);

    spec.schools.forEach((name) => {
      const lecturesBySchool = this._findLectureBySchool(name, store);

      lecturesByInterval.forEach((p) => {
        lecturesBySchool.forEach((o) => {
          if (p.id === o.id) {
            lectures.push(p);
          }
        });
      });
    });

    if (lectures.length > 0) {
      this.errors.push(`This school(s) ${spec.schools} is busy`);
      this.valid = false;
    }
  }

  _isValidCount(spec, store) {
    if (!this.valid) {
      return;
    }

    let schoolsCount = spec.schools.reduce((prevIt, currIt) => {
      const school = store.schools.find(it => it.name === currIt);
      return prevIt + school.count;
    }, 0);
    const classroom = store.classrooms.find(it => it.name === spec.classroom);
    const classroomCount = classroom ? classroom.count : 0;
    const hasOverflow = classroomCount < schoolsCount;

    if (hasOverflow) {
      this.errors.push(`This classroom ${spec.classroom} is small for the school(s)`);
      this.valid = false;
    }
  }

  _findLectureBySchool(name, store) {
    const result = [];

    store.lectures.forEach((p) => {
      const lecture = p;
      const schools = lecture.schools.map((it) => {
        const school = store.schools.find(school => it === school.name );
        return school && school.name;
      });

      if (schools.indexOf(name) >= 0) {
        result.push(lecture);
      }
    });

    return result;
  }

  _findLectureByDate(date, store) {
    const result = [];
    const from = new Date(date.from);
    const to = new Date(date.to);
    const adjustedInterval = {
      from: from.toISOString(),
      to: to.toISOString(),
    };

    store.lectures.forEach((p) => {
      const lecture = p;
      const currentFrom = lecture.dateFrom;
      const currentTo = lecture.dateTo;
      const currentInterval = {
        from: currentFrom,
        to: currentTo,
      };

      if (this._hasDateInterval(currentInterval, adjustedInterval)) {
        result.push(lecture);
      }
    });

    return result;
  }

  _hasDateInterval(current, adjusted) {
    const currentIsBeforeAdjusted = current.to < adjusted.from;
    const currentIsAfterAdjusted = current.from > adjusted.to;

    return !currentIsBeforeAdjusted && !currentIsAfterAdjusted;
  }
}

export default LectureValidator;
