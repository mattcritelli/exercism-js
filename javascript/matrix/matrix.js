export class Matrix {
  constructor(data) {
    this.data = data;
  }

  generateRows(data) {
    return data.split('\n')
      .map(row => row
        .split(' ')
        .map(strNum => Number(strNum))
      );
  }

  get rows() {
    if (!this._rows_) this._rows_ = this.generateRows(this.data);

    return this._rows_;
  }

  get columns() {
    // Not an issue with our test cases but added this statement in case user
    // ran 'get columns' first since it is dependent upon this._rows_ existing
    if (!this._rows) this._rows_ = this.generateRows(this.data);
    if (!this._columns_) this._columns_ = [];

    this._rows_
      .forEach((row, i) =>
        row.forEach((num, j) => {
          if(!this._columns_[j]) this._columns_[j] = [];
          this._columns_[j][i] = num;
        })
    );

    return this._columns_;
  }
}
