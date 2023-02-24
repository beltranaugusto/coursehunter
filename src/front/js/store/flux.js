import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || null,
      user_id: "",
      urlBase: "http://localhost:3001/api",
      postcourses: [],
      postevents: [],

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
      createUser: (formData) => {
        return fetch("http://127.0.0.1:3001/api/sign_up", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
            return true;
          })
          .catch((error) => {
            console.error("Error:", error);
            return false;
          });
      },

      logIn: async (email, password) => {
        const datos = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            "http://127.0.0.1:3001/api/login",
            datos
          );

          if (response.status !== 200) {
            console.error("Error:", error);
            return false;
          }
          let data = await response.json();

          localStorage.setItem("token", data.token);
          setStore({ token: data.token });
          setStore({ user_id: data.user_id });
          return true;
      getPostCourses: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/courses`);
          let data = await response.json();
          console.log(data);
          setStore({
            postcourses: data,
          });
        } catch (error) {
          console.log(`${error} error`);
        }
      },
      getPostEvents: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/events`);
          let data = await response.json();
          setStore({ postevents: data });
        } catch (error) {
          console.log(error);
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
