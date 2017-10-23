class SchoolValidator {

  validate(spec) {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });

    this.errors = {};
    this.valid = true;

    this._isObject(spec);
    this._isValidName(spec.name);
    this._isValidCount(spec.count);

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

  _isObject(spec) {
    if (!(spec instanceof Object)) {
      this.errors.object = `school data ${spec} is not an Object`;
      this.valid = false;
    }
  }

  _isValidName(name) {
    if (typeof name !== 'string' || name === '') {
      this.errors.name = `school name is not a String`;
      this.valid = false;
    }
  }

  _isValidCount(count) {
    const parsedCount = parseInt(count, 10);
    if (typeof count !== 'number' || count === '' || isNaN(parsedCount)) {
      this.errors.count = `school count ${count} is not a Number`;
      this.valid = false;
    }
  }
}

export default SchoolValidator;
