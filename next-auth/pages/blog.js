import { getSession } from "next-auth/react";
export default function Blog({ data }) {
  return <h1>Blog Page - {data}</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false
      }
    }
  }
  return {
    props: {
      data: session ? "List of 100 personalized blog" : "List of free blogs",
    },
  };
}
