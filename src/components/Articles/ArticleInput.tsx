import { Input, Button } from '@mui/material';
import { DB } from '../../components/../api/instance/firebase';
import { useState } from 'react';
import { ref, push } from '@firebase/database';

const ArticleInput = () => {
  const [article, setArticle] = useState<string>('');
  const handleChangeArticle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle(e.target.value);
  };

  const handleArticleSubmit = () => {
    const User = sessionStorage.getItem('userId') || 'anonymous user';
    push(ref(DB, '/'), {
      comment: article,
      user: User,
    });
  };
  return (
    <>
      <Input placeholder="Go your chat" onChange={handleChangeArticle} />
      <Button aria-label="Submit" variant="text" onClick={handleArticleSubmit}>
        Go
      </Button>
    </>
  );
};

export default ArticleInput;
