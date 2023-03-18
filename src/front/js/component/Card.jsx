import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const favorited = store.userData.favorites?.find((item) => props.data?.id == item) 

  return (
    <>
      <div className="card col-1">
        <img
          src={`${props.data?.img_url}`}
          className="card-img-top mb-2 border-bottom"
          alt="..."
        />
        <div className="card-body text-center">
          <div className="border rounded mx-2 p-2">
            <h5 className="card-title">{`${props.data?.name}`}</h5>
            <p className="card-text fs-6">
              {props.data?.author_name}
            </p>
          </div>
          <ul className="list-group m-2">
            <li className="list-group-item">
                    <strong>Online: </strong> {props.data?.online ? ( "Si" ) : "No"}
            </li>
            <li className="list-group-item">
                    <strong>Certificado: </strong> {props.data?.certificate ? ( "Si" ) : "No"}
            </li>
            <li className="list-group-item">
                    <strong>Categoria: </strong> {props.data?.categories ? props.data?.categories : null}
            </li>
          </ul>
          
            <div className="card-button mx-2">
            <Link
              to={`/${props.type}/${props.data?.id}`}
              className="btn btn-secondary"
            >
              Ver mas
            </Link>
          { store.user_id == "" ? null :
            <button
              type="button"
              className={"btn btn-secondary w-25 " + (favorited ? ("btn-warning") : null)}
              onClick={() => {
                {
                  actions.addCard(props.data.id, store.user_id);
                }
              }}
            >
              <i class="fa-solid fa-bookmark"></i>
            </button>
          }
            </div>
          
            
        </div>
      </div>
    </>
  );
};
