import React, { Component } from 'react';
import './App.css';
import readXlsxFile from 'read-excel-file';
import { schema } from './schema';

class Upload extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   file: null
    // };
    this.readFile = this.readFile.bind(this);
    this.submit = this.submit.bind(this);
  }

  readFile(e) {
    const file = e.target.files[0];
    if (file) {
      // readXlsxFile(file, { schema }).then(rows => {
      //   console.log(rows);

      //   // `rows` is an array of rows
      //   // each row being an array of cells.
      // });

      readXlsxFile(file, {
        schema,
        transformData(data) {
          // const dataRows = ['NO', 'ID', 'PAGE'].concat(data);
          const rows = data.filter(
            row => row.filter(column => column !== null).length > 0
          );

          const temp = rows.map(row => {
            const rs = row.map(col => {
              if (col !== null && col !== undefined) return col;
            });
            if (rs.length > 0) {
              return rs;
            }
          });

          const result = temp.map(r => {
            const filRes = r.filter(word => word && word.length > 1);
            return filRes;
          });

          console.log(result);

          // console.log(rows);
        }
      });
    }
  }

  submit() {
    console.log('submit');
  }

  render() {
    // const { file } = this.state;
    return <input type='file' id='input' onChange={this.readFile} />;
  }
}

export default Upload;
