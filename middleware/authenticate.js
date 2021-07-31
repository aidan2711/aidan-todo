export default function ({ store, redirect }) {
  
  if (!localStorage.getItem('authToken')) {
    return redirect('/login');
  }
}