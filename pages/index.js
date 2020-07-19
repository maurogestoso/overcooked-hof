import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ chefs }) {
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {chefs.map((chef) => (
            <tr>
              <td>
                <Link href={`/chefs/${chef.name}`}>
                  <a>{chef.name}</a>
                </Link>
              </td>
              <td>{chef.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      chefs: [
        { name: "mauro", points: 1000 },
        { name: "eze", points: 1000 },
      ],
    },
  };
}
