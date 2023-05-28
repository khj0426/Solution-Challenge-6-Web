import Article from '../components/Articles/Article';
import { ref, get, onValue, off } from 'firebase/database';
import { DB } from '../api/instance/firebase'; // Firebase 실시간 데이터베이스 인스턴스 가져오기
import type { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';

export type Comment = {
  comment: string;
  user: string;
  userimg: string;
  commentTime: string;
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
  const [article, setArticle] = useState<Comment[] | null>(props);

  useEffect(() => {
    const articleRef = ref(DB, '/');

    const handleData = (snapshot: any) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setArticle(data);
      }
    };

    const onError = (error: any) => {
      console.log(error);
    };

    onValue(articleRef, handleData, onError);
  }, []);

  return <Article articles={article} />;
};

export default ArticlePage;
