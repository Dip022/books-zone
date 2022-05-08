import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="mb-5">
      <h1 className="mt-5 mb-5 text-center">Bolg</h1>
      <Container>
        <div className="question">
          <h2 className="fst-italic">
            Difference between javascript and nodejs ?
          </h2>
          <h6>
            <span className="font-bold">Ans: </span>
            JavaScript is a programming language located on the JavaScript
            client site. It can only run in the browser. So this language is
            called level programming language.
            <br />
            <br />
            Note js does not have a browser like JavaScript. Note js can run
            outside of the JavaScript browser.
          </h6>
        </div>
        <div className="  question">
          <h2 className="fst-italic">
            When should you use nodejs and when should you use mongodb?
          </h2>
          <h6>
            <span className="font-bold">Ans: </span>
            We send data through node js. So node js is used in BobCont. Node js
            can be used to send data from clit site to the server site.
            <br />
            <br />
            With MongoDB we can keep data in one place. With the API math of
            Node js , we can move the data to the specified location.
          </h6>
        </div>
        <div className="  question">
          <h2 className="fst-italic">
            What is the purpose of jwt and how does it work?
          </h2>
          <h6>
            <span className="font-bold">Ans: </span>
            jwt is called a token. If a user logs in to the website through jwt
            then he creates a token. It establishes a relationship with email.
          </h6>
        </div>
        <div className="  question">
          <h2 className="fst-italic">
            Differences between sql and nosql databases?
          </h2>
          <h6>
            <span className="font-bold">Ans: </span>
            The data is stored through SQL database. SQL is called a table base
            database. So its data is in the form of table s.
            <br />
            <br />
            There are many types of data in the database that we can access this
            data in an easy way but we get SQL data in the form of tables or
            forms.
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
