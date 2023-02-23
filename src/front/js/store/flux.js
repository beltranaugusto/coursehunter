const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
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

      createUser: async (formData) => {
        fetch("http://127.0.0.1:3001/api/sign_up", {
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
          }
          let data = await response.json();

          localStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
        } catch (error) {
          console.log(error);
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        setStore({ token: null });
      },

      getHola: async () => {
        const datos = {
          headers: {
            Authorization: "Bearer" + store.token,
          },
        };
        fetch("http://127.0.0.1:3001/api/helloo", datos)
          .then((response) => response.json())
          .then((data) => {
            setStore({ message: data.message });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    },
  };
};

export default getState;
