
export default function({ $axios, redirect, store}) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] = 'aidan|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMDE5N2Q2NjVjNDM4MmQ4ODAzYzQzOSIsImVtYWlsIjoiYWlkYW4udGVzdEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFpZGFuLnRlc3QiLCJmdWxsbmFtZSI6IkFpZGFuIERldiIsInJvbGUiOnsiX2lkIjoiNjEwMTk3ODBiM2ViNDQyZDZhOWUyZjI3IiwiY3JlYXRlZF9kYXRlIjoiMjAyMS0wNy0yOFQxNzo0NDozMi4zNDJaIiwicm9sZV90eXBlIjoxLCJuYW1lIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6IkFkbWluaXN0cmF0b3IiLCJfX3YiOjB9LCJwYXNzd29yZCI6IiQyYiQxMCRDb3dqcy9xV0pHQlFYTFZ6b0ZEbTJ1bUlBLm8vZmE4M2U0cmo3dUJIV2hNY0F4RnNnbTh6QyIsImNyZWF0ZWRfZGF0ZSI6IjIwMjEtMDctMjhUMTc6NDU6NTguNTU0WiIsIl9fdiI6MH0sImlhdCI6MTYyNzY1NTk0Mn0.9Z-fDJuqGZlZl0jCK1-GlC_Xb3afms90cMgRoZhLxbE';
    config.headers.common["department"] = "development";
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
