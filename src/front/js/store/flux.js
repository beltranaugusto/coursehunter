import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "http://localhost:3001/api",
    },
    actions: {
      createPost: async (formData) => {
        console.log(formData);
        fetch("http://127.0.0.1:3001/api/create_event", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      getPostCourses: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/courses`);
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      getPostEvents: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/events`);
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
