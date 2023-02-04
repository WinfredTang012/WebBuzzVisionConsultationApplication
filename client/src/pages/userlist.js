import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scrollToAction } from "../redux/actions/scrollAction";
import UserCard from "../components/UserCard";
import LoadIcon from "../images/loading.gif";
import FollowBtn from "../components/FollowBtn";
import { getSuggestions } from "../redux/actions/suggestionsAction";

const userlist = () => {
  const { homePosts, scroll ,auth, suggestions} = useSelector((state) => state);
  const dispatch = useDispatch();





  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div>
        <div className="status my-3 d-flex">
        <h4> User List</h4>
        </div>

        {suggestions.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
          ) : (
            <div className="suggestions">
              {suggestions.users.map((user) => (
                <UserCard key={user._id} user={user}>
                  <FollowBtn user={user} /> 
                </UserCard>
              ))}
              
            </div>
          )}

          </div>
  );
};

export default userlist;