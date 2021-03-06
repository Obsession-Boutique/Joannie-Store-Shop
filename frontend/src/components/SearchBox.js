import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} id="demo-2" inline>
      <Form.Control
        type="search"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products"
        className="mr-sm-2 ml-sm-5 srchfld"
      ></Form.Control>
      <Button type="submit" variant="primary" className="p-2 srch">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
