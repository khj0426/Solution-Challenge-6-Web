import Article from '../components/Articles/Article';
import { ref, get } from 'firebase/database';
import { DB } from '../api/instance/firebase'; // Firebase 실시간 데이터베이스 인스턴스 가져오기
import type { GetStaticProps } from 'next';

export type Comment = {
  comment: string;
  user: string;
  userimg: string;
};
export const getStaticProps: GetStaticProps = async () => {
  let posts: Comment[] = [];
  try {
    const articleRef = ref(DB, '/');
    const snapShot = await get(articleRef);

    if (snapShot.exists()) {
      posts = snapShot.val();
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: posts,
  };
};

const ArticlePage = (props: Comment[] | null) => {
  return <Article articles={props} />;
};

export default ArticlePage;
