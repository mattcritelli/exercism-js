export class Matrix {
  constructor(data) {
    this.data = data;
  }

  // Helper functions
  generateRows(data) {
    return data.split('\n')
      .map(row => row.split(' ').map(Number));
  }

  transpose(rows) {
    return rows[0] 
      .map((_, i) => 
        rows.map(row => row[i])); 
  }
  
  //Lazy-loaded getters
  get rows() {
    if (!this._rows_) this._rows_ = this.generateRows(this.data);

    return this._rows_;
  }

  get columns() {
    // Not an issue with our test cases but added this statement in case user
    // ran 'get columns' first since it is dependent upon this._rows_ existing
    if (!this._rows) this._rows_ = this.generateRows(this.data);
    if (!this._columns_)
      this._columns_ = this.transpose(this._rows_)

    return this._columns_;
  }
}
