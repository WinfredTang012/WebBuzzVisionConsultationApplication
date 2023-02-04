import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import { scrollToAction } from "../redux/actions/scrollAction";

import LoadIcon from "../images/loading.gif";
import { getSuggestions } from "../redux/actions/suggestionsAction";
import "./forum.css"
const Home = () => {
  const { homePosts, scroll } = useSelector((state) => state);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  window.addEventListener("scroll", async () => {
    if (window.location.pathname === "/") {
      await dispatch(scrollToAction(window.pageYOffset));
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    
    <div className="home row mx-0">
      <div className="col-md-15">
        <Status />
        { auth.user.position === 'doctor' ? (
        <small>***Please answer the questions below</small>
        ) : (
          <h6></h6>
          )
        }
        <div className="row justify-content-center">
        <div className=" col-md-7">
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Question</h2>
        ) : (
          <Posts />
        )}
      </div>
      </div>
   </div>

    </div>
  );
};

export default Home;
