import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/sidebar.css";
import "@/styles/feed.css";
import "@/styles/widget.css";
import "@/styles/avatar.css";
import "@/styles/createNewPost.css";
import "@/styles/post.css";
import "@/styles/home.page.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
