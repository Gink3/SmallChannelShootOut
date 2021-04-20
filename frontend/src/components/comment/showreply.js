import React, { useState } from 'react';
import './comment.scss'
import { useQuery } from 'react-query';
import { Get } from '../utilities';
import Accordion from 'react-bootstrap/Accordion'
import { Button, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import Addreply from './addreply';
import {MdExpandMore} from 'react-icons/md';

const Showreply = ({ commentId }) => {
  var replyCount = 0;
  const [showreply, setShowreply] = useState(false);

  const { isLoading, error, data } = useQuery("replyList", () => {
    return Get("http://localhost:3009/replys");
  });

  if (isLoading) {
    return (
      <div>
        <Spinner animation="grow" />
      </div>
    );
  }
  if (error) {
    return <div>Something went wrong :(</div>;
  }
  return (
    <>
      {data.data.map((r) => {
        if (commentId == r.commentId) {
          replyCount = replyCount + 1;
        }
      })}
      <span
        onClick={() => (showreply ? setShowreply(false) : setShowreply(true))}
        className="reply"
        style={{ marginLeft: "3rem", color: "burlywood" }}
      >
        {" "}
        ({replyCount}) Repl{replyCount > 1 ? "ies" : "y"} <MdExpandMore/>{" "}
      </span>
      {showreply &&
                          (
                            <div>
      {data.data.map((replying) => {
        if (commentId == replying.commentId) {
          return (
            <>
              <div key={replying.id}>
                <div
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#cccccc",
                    marginLeft: "2rem",
                    marginTop: "5px",
                    padding: ".5rem",
                  }}
                  key={replying.id}
                >
                  <div style={{ fontWeight: "bold" }}>{replying.authorName}: </div>
                  {replying.reply}
                  <br></br>
                  <Addreply commentId={replying.commentId} />
                </div>
              </div>
            </>
          );
        }
      })}
      </div>
      )}
    </>
  );
};
export default Showreply;
