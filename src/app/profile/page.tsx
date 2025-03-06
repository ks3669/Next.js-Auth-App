import { changePremium, changeUsername, getSession } from "@/actions";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>You are a <b>{session.isPro ? "Premium" : "Free"}</b> user</span>
      <form action={changePremium}>
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>

      <form action={changeUsername}>
        <input type="text" name="username" required placeholder={session.username} />
        <button>Update you username - If you update then you have to login with your updated username</button>
        <p> NOTE:- Once you update your Username, you should login what that updated username</p>
        <p> Try cancelling the premium by clicking on "Cancel Premium" button and then go to Premium page to see what happens!</p>
      </form>
    </div>
  );
};

export default ProfilePage;
