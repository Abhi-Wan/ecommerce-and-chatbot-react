import { Header } from "../components/Header";
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <>
      <title>Page not found :(</title>
      <link rel="icon" type="image/svg+xml" href="/sad-favicon.png" />

      <Header />

      <div className="not-found-page" >
        <div className="message">Error 404: Page not found</div>
        <img className="image" src="/sad-favicon.png"></img>
      </div>
    </>
  );
}