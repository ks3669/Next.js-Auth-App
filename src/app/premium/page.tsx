import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
        <Link href="/profile">
          If you wanna see what is in the premium section - Go to the profile page to upgrade to premium.
        </Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to the PremiumPage</h1>
      <ul>
        <li>These are contents that are only available for premium users.</li>
        <li>These contents will not be available for normal users</li>
        <li>Confidential premium users only information</li>
      </ul>
    </div>
  );
};

export default PremiumPage;
