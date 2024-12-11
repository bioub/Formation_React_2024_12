import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "This is the about page description",
};

export default function About() {
  return (
    <div>
      <main>
        <h1>About</h1>
        <p>This is the about page.</p>
      </main>
    </div>
  );
}