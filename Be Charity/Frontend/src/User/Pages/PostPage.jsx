import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const PostPage = () => {
  const [data, setData] = useState(null);
  const [deleted, setDeleted] = useState("");
  const [de, setDe] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const handleEdit = () => {
    axios
      .patch(
        `https://lemon-termite-hem.cyclic.app/posts/update/${deleted}`,
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setDeleted("");
        alert(res.data);
        console.log(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://lemon-termite-hem.cyclic.app/posts/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDe(!de);
        alert("deleted successfully");
      
      })
      .catch((err) => console.log("error deleting"));
  };

  function changeEdit(e, ele) {
    setDeleted(ele._id);
    setTitle(ele.title);
    setBody(ele.body);
  
  }



  useEffect(() => {
   
    axios
      .get("https://lemon-termite-hem.cyclic.app/posts/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
       
        setData(res.data.Post);
      })
      .catch((err) => console.log(err));
  }, [deleted,de]);

  return (
    <div>
      <h2>All Post</h2>
      {deleted && <div><h3>Editing Area:-</h3>
      <input
                  type="text"
                  value={title}
                  onChange={(e) => {setTitle(e.target.value)}}
                />
                <br />
                <input
                  type="text"
                  value={body}
                  onChange={(e) => {setBody(e.target.value)}}
                />
                <br />
                <button onClick={handleEdit} style={{color:"green",margin:"10px",border:"none",backgroundColor:"white"}}>SUBMIT</button>
<button  onClick={(e)=>setDeleted("")} style={{color:"red",margin:"10px",border:"none",backgroundColor:"white"}}>CANCEL</button>
      </div>
      }
      {data?.map?.((ele) => {
        return (
          <div key={Math.random()}>
            {<h2>{ele.title}</h2>}
            {<p>{ele.body}</p>}
            {<button onClick={(e) => changeEdit(e, ele)}>EDIT</button>}
            <button onClick={(e) => handleDelete(ele._id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;
