import React, {useState} from 'react';
import { Button, Card, Spinner } from "react-bootstrap";
import "../style/talk.scss";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import toast from "../images/toast.png";
import AddComment from "../components/comment/addcomment";
import ShowComment from "../components/comment/showcomment";
 /* import AdSense from 'react-adsense';  */
import { useMutation, useQuery } from 'react-query';
import { Get } from '../components/utilities';
 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { queryClient } from '../reactQuery';
/* BAckUp API:`http://localhost:3009/posts/${id}` */
const updateLike=({_id, likes, isLiked})=>{
  return axios.patch(`http://localhost:5000/thread/${_id}`, {_id, likes, isLiked});
}

function Thread(){
  const [userId, setUserId]=useState('');
   
    axios.get('http://localhost:5000/userInfo', {
        withCredentials:true
    }).then (function(response){
       const userId = response.data._id;
       setUserId(userId);
        });
  const mutation = useMutation(updateLike);
var x= new Boolean(false);
  /* const [userId, setuserId] = useState('') */;
  const likeThread=(_id, likes, isLiked)=>{
    const tractId=userId;
    console.log(tractId);
    /* setuserId(tractId); */
    var found=false;
    
    /* {isLiked.filter(name => name.includes(tractId)).map((filteredName,i) => (
     (filteredName == tractId) ? isLiked.splice(2,1)&&(found=true)&& (likes=likes-1)&&console.log(i) : ""
    )
    )} */
    for (var i =0; i<isLiked.length; i++){
     if  (isLiked[i] == tractId){
      isLiked.splice(i,1);
      found=true;
      likes=likes-1;
     }
    }
    if (!found){
      isLiked.push(tractId);
      likes=likes+1;
    }
    
      mutation.mutate(
        {_id, likes, isLiked},
        {
          onSuccess: ()=>{
            queryClient.refetchQueries(["postList"]);
          }
        }

      );
     }
     /* Backup API: "http://localhost:3009/posts" ===> This runs on json server */
/* DB API:"http://localhost:5000/thread" */
     const {isLoading, error, data} = useQuery("postList",() =>{
      return Get("http://localhost:5000/thread");
  });
   
   if (isLoading){
    return <div ><Spinner  style={{marginTop:'30%', marginLeft:'50%'}} animation="border" /></div>;
}
if(error){
    return <div>Something went wrong :(</div>
}

    
    return (
      <> 
      {data.data.map((thread)=>{
        return (
        <>
           <Card
            className="backside"
            key={thread._id}
            style={{ minWidth: "18rem", flexGrow: 1 }}
          >
  {console.log(thread._id)}

            <Card.Body>
              <Card.Title
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                &nbsp;
                <div className="ml-4">
                  <img src={toast} className="rounded mr-2" />
                  &nbsp;
                  <span>{thread.title}</span>
                  <span> &nbsp; &nbsp; ||&nbsp; {thread.userName}</span>
                </div>
                <div
                  className="d-flex justify-content-end mt-sm-6"
                  style={{ marginTop: "9px", color: "#B6B6B4" }}
                >
                  <small>{thread.date}&nbsp;&nbsp;&nbsp;</small>
                </div>
              </Card.Title>
              <div
                style={{ borderTop: "4px solid #E5E4E2 ", borderRadius: "15px" }}
              ></div>
              
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              &nbsp;{thread.body}
              <br/><br/>
              <div style={ {borderRadius: '9px'  }} className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${thread.link}`}
                    allowFullScreen
                  ></iframe>
                </div>
            
              <hr style={{ height: "2px", color: "#E5E4E2" }} />
              &nbsp;&nbsp;&nbsp;



              <Button variant="" className="like-btn" onClick={()=>{likeThread(thread._id, thread.likes, thread.isLiked)}} >
              <FiThumbsUp size="1.5em" color="green" className="like-btn" />
              </Button>
              {thread.likes}
              


              &nbsp;&nbsp;&nbsp;
              <Button variant="" className="dislike-btn">
              <FiThumbsDown className="dislike-btn" size="1.5em" color="red" />
              </Button>
              {thread.dislikes}
             
              &nbsp;&nbsp;&nbsp;
              {/* <ToastContainer /> */}
             
              
            <AddComment postId={thread._id}/>
          <ShowComment postId={thread._id}/>
            </Card.Body>
          </Card> 
       
          </>);
      })}
        <ToastContainer />
      </>
    );
  }
  
  export default Thread;