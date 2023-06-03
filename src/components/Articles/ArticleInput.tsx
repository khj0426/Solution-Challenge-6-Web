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
    const date = new Date();
    const UTCTime = new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      )
    );

    const NOWUTC = new Date(UTCTime).toUTCString() + '';
    const User = sessionStorage.getItem('userId') || 'anonymous user';
    const UserImg = sessionStorage.getItem('imgURL') || '';
    push(ref(DB, '/'), {
      comment: article,
   
    
      commentTime: NOWUTC,
    }).then(() => {
      setArticle('');
    });
  };
  return (
    <>
      <Input
        placeholder="Please enter your comments"
        onChange={handleChangeArticle}
        style={{
          width: '50vw',
          marginBottom: '60px',
        }}
      />
      <Button
        aria-label="Submit"
        variant="text"
        onClick={handleArticleSubmit}
        style={{
          background: 'rgb(0, 136, 254)',
        }}
      >
        <span
          style={{
            fontSize: '1.2rem',
            color: 'white',
          }}
        >
          Go
        </span>
      </Button>
    </>
  );
};

export default ArticleInput;
