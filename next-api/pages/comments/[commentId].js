import { comments } from "@/data/comments";
import { useRouter } from "next/router";

export default function Comment({ comment }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  // try to avoid caling own api route in getStaticProps use fetch in getStaticProps
  // for external route only
  console.log(comments);
  const comment = comments.find((comment) => comment.id === parseInt(commentId));
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}
