import Link from "next/link";

export default function Home({ chefs }) {
  return (
    <div>
      <h1>Overcooked Hall of Fame</h1>
      <ul>
        {chefs.map((chef) => (
          <li>
            <Link href={`/chefs/${chef}`}>
              <a>{chef}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      chefs: ["mauro", "eze"],
    },
  };
}
