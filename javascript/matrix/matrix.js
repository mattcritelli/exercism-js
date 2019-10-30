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
    let output = []

    this.data
      .split('\n')
      .forEach((row) => {
        let splitRow = row.split(' ');

        for(let i = 0; i < splitRow.length; i++) {
          if(!output[i]) {
            output[i] = []
          }
          output[i].push(Number(splitRow[i]));
        }
      })
    return output;
  }

}
