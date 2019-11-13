export class Matrix {
  constructor(data) {
    this.data = data;
  }

  get rows() {
    if (this._rows_) return this._rows_;

    this._rows_ = this.data
        .split('\n')
        .map(row => row
          .split(' ')
          .map(strNum => Number(strNum)));

    return this._rows_;
  }

  get columns() {
    if (this._columns_) return this._columns_;

    this._columns_ = [];

    let rows = this.data
      .split('\n')
      .map(row => row
        .split(' ')
        .map(strNum => Number(strNum)));

    for(let i = 0; i < rows.length; i++) {
      for(let j = 0; j < rows[i].length; j++) {
        if (!this._columns_[j]) {
          this._columns_[j] = [];
        }
        this._columns_[j].push(Number(rows[i][j]));
      }
    }
    return this._columns_;
  }
}
