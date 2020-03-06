import React from "react";
import CenteredColumns from "./CenteredColumns";
import Avatar from "./Avatar";
import "./Users.scss";

function Users(props) {
  return (
    <CenteredColumns>
      {props.people.map((person, index) => (
        <div
          className="column is-half-tablet is-one-third-desktop is-flex"
          key={index}
        >
          <a
            className="Users__card card is-flex"
            href={`/user/${person.username}`}
          >
            <div className="card-image">
              <figure className="Users__image image is-3by1">
                <img className="is-overlay" src={person.headerImage} alt="" />
              </figure>
            </div>
            <div className="Users__card-content card-content is-flex has-text-centered">
              <div className="Users__avatar-wrapper">
                <Avatar
                  image={person.avatarImage}
                  size={96}
                  alt={person.name}
                />
              </div>
              <div className="Users__details">
                <p className="is-size-6 has-text-weight-bold">{person.name}</p>
                <p className="is-size-7 has-text-weight-semibold has-text-grey">
                  @{person.username}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Users;
