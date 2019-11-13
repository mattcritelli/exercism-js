export class Matrix {
  constructor(data) {
    this.data = data
  }

  get rows() {
    return this.data
      .split('\n')
      .map(row => row
        .split(' ')
        .map(strNum => Number(strNum)))
  }

  get columns() {
    let output = [];

    let rows = this.data
      .split('\n')
      .map(row => row
        .split(' ')
        .map(strNum => Number(strNum)));

    for(let i = 0; i < rows.length; i++) {

      for(let j = 0; j < rows[i].length; j++) {
        if(!output[j]) {
          output[j] = [];
        }
        output[j].push(Number(rows[i][j]));
      }
    }
    return output;
  }
}
