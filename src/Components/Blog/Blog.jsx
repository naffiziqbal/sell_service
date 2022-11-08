import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="ques py-3 text-center">
        <h3 className="text-xl bg-slate-500 text-white">
          What is The Differance Between NoSQL and SQL Database?
        </h3>
        <div className="text-start">
          <p>
            SQL, which stands for “Structured Query Language,” is the
            programming language that’s been widely used in managing data in
            relational database management systems (RDBMS) since the 1970s. In
            the early years, when storage was expensive, SQL databases focused
            on reducing data duplication.
          </p>
          <p>
            NoSQL is a non-relational database, meaning it allows different
            structures than a SQL database (not rows and columns) and more
            flexibility to use a format that best fits the data. The term
            “NoSQL” was not coined until the early 2000s. It doesn’t mean the
            systems don’t use SQL, as NoSQL databases do sometimes support some
            SQL commands. More accurately, “NoSQL” is sometimes defined as “not
            only SQL.”
          </p>
        </div>
      </div>
      <div className="ques py-3 text-center">
        <h3 className="text-xl bg-slate-500 text-white">
          What is JWT, And How Does it Works?
        </h3>
        <div className="text-start">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JWTs can be signed using
            a secret (with the HMAC algorithm) or a public/private key pair
            using RSA or ECDSA.
          </p>
          <p>
            In authentication, when the user successfully logs in using their
            credentials, a JSON Web Token will be returned. Since tokens are
            credentials, great care must be taken to prevent security issues. In
            general, you should not keep tokens longer than required.
          </p>
        </div>
      </div>
      <div className="ques py-3 text-center">
        <h3 className="text-xl bg-slate-500 text-white">
          {" "}
          What is The Difference Between Javascript and Node JS
        </h3>
        <div className="text-start">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div className="ques py-3 text-center">
        <h3 className="text-xl bg-slate-500 text-white">
          {" "}
          How Does Node JS Handle Multiple Request At a Time ?{" "}
        </h3>
        <p className="text-start">
          {" "}
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
