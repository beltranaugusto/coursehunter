import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || null,
      user_id: localStorage.getItem("user_id") || "",
      urlBase: "http://localhost:3001/api",
      postcourses: [],
      postevents: [],
      userData: [],
      tempUserData: [],
      searchValue: "",
      searchCategory: "",
      coursesandeventsbycategory: [],
    },
    actions: {
      createPost: async (formData) => {
        console.log(formData);
        fetch("http://127.0.0.1:3001/api/create_event", {
          method: "POST",
          body: formData,
          mode: "no-cors",
        })
          .then((response) => console.log(response))
          .then((result) => {
            getActions().getPostCourses();
            getActions().getPostEvents();
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      createUser: (formData) => {
        return fetch("http://127.0.0.1:3001/api/sign_up", {
          method: "POST",
          body: formData,
          mode: "no-cors",
        })
          .then((response) => console.log(response))
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
          localStorage.setItem("user_id", data.user_id);
          setStore({ user_id: data.user_id });

          getActions().getUser(data.user_id);

          return true;
        } catch (error) {
          console.log(error);
        }
      },

      getPostCourses: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/courses`);
          let data = await response.json();

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

      addCard: (post_id, user_id) => {
        fetch(`http://127.0.0.1:3001/api/favorites/${user_id}/${post_id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            getActions().getUser(user_id);
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        setStore({ token: null, user_id: "" });
      },

      // Hay dos rutas para obtener un usuario, las dos hacen la misma consulta al api.
      // Pero, esta, getUser, settea en el store lo que obtiene
      // Esta es usada a la hora de loggearse
      getUser: async (user_id) => {
        try {
          let response = await fetch(`${getStore().urlBase}/user/${user_id}`);
          let data = await response.json();
          setStore({ userData: data });
        } catch (error) {
          console.log(error);
        }
      },

      // Mientras que esta solo devuelve la informacion.
      // Esta es usada en cualquier lugar que necesitemos la informacion de un usuario en especifico, como entrar al perfil de un usuario.
      getUserAlt: async (user_id) => {
        try {
          let response = await fetch(`${getStore().urlBase}/user/${user_id}`);
          let data = await response.json();
          console.log(data);
          setStore({ tempUserData: data, searchCategory: "", searchValue: "" });
        } catch (error) {
          console.log(error);
        }
      },

      askInformation: async (user_id, publisher_id, post_id) => {
        try {
          let response = await fetch(
            `${
              getStore().urlBase
            }/post_email/${user_id}/${publisher_id}/${post_id}`,
            { method: "GET" }
          );
          let data = await response.json();
          getActions().getUser(user_id);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      searchPost: (name) => {
        setStore({ searchValue: name });
      },
      filterbycategory: (category) => {
        setStore({ searchCategory: category });
      },
      coursesandeventsbycategory: () => {
        const posts = [...getStore().postevents, ...getStore().postcourses];
        const categories = posts.map((post) => post.categories);
        const uniquecategory = [...new Set(categories)];

        setStore({ coursesandeventsbycategory: uniquecategory });
      },
      cleanInput: () => {
        setStore({ searchCategory: "", searchValue: "" });
      },
    },
  };
};

export default getState;
