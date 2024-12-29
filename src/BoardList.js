import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

// const submitTest = ()=> {
//   Axios.get('http://localhost:8000/')
//   .then(function (response) {
//     // 성공 핸들링
//     alert('등록완료');
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 에러 핸들링
//     console.log(error);
//   });
// }

class Board extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>{this.props.title}</td>
        <td>{this.props.registerId}</td>
        <td>{this.props.date}</td>
      </tr>
    )
  }
}



export default class BoardList extends Component {
  state = {
    BoardList : []
  }
  getList = () => {
    Axios.get('http://localhost:8000/list')
    .then( (res) => {
      // 성공 핸들링
      // const data = res.data;
      const {data} = res;
      this.setState({
        BoardList : data
      })
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    });
  }
  componentDidMount(){
    this.getList();
  }

  render() {
    // console.log(this.state.BoardList);
    return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.BoardList.map(item => {
                return <Board key={item.BOARD_ID} title={item.BOARD_TITLE} registerId={item.REGISTER_ID} date={item.REGISTER_DATE}/>
            })
          }

        </tbody>
      </Table>
      <div className='d-flex gap-1'>
        {/* <Button variant="primary" onClick={submitTest}>글쓰기</Button> */}
        <Button variant="primary" >글쓰기</Button>
        <Button variant="secondary">수정하기</Button>
        <Button variant="danger">삭제하기</Button>
      </div>
    </>
    )
  }
}
