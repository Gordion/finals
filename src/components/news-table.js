import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class NewsTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteNews = this.deleteNews.bind(this);
  }

  deleteNews() {
    axios
      .delete("http://localhost:4000/news/delete-news/" + this.props.obj._id)
      .then((res) => {
        this.props.onRowDelete(this.props.obj._id);
        console.log("News successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.timestamp}</td>
        <td>
          <Button onClick={this.deleteNews} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
