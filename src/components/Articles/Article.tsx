import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  Card,
  ListItemText,
} from '@mui/material';
import type { Comment } from '../../pages/articles';
import ArticleInput from './ArticleInput';
import { v4 } from 'uuid';

export default function EllipsisList({
  articles,
}: {
  articles: Comment[] | null;
}) {
  //map으로 List props 받아서 랜더링할꺼임
  return (
    <>
      <Card
        style={{
          width: '100%',
          margin: '50px auto',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '15px',
        }}
      >
        <Box sx={{ width: '50%' }}>
          <Typography sx={{ letterSpacing: '0.15rem', fontWeight: '700' }}>
            Chat
          </Typography>
          <List
            aria-labelledby="ellipsis-list-demo"
            sx={{ '--ListItemDecorator-size': '56px' }}
          >
            {articles &&
              Object.entries(articles).map(([, value]) => (
                <ListItem
                  key={v4()}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '5px',
                  }}
                >
                  <Avatar src={value.userimg} alt="user article img" />
                  <ListItemText>
                    <Typography>{value.comment}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
          </List>
        </Box>
      </Card>
      <ArticleInput />
    </>
  );
}
