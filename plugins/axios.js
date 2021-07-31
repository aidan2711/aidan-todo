
export default function({ $axios, redirect, store}) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] = localStorage.getItem('authToken');
    config.headers.common["department"] = "development";
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
