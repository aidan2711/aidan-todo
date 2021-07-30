export default function(context) {
  console.log(context.store);
  if (!context.store.getters.isLoggedIn) context.redirect("/login");
}
