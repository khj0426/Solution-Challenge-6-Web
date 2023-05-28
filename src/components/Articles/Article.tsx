import {
  Box,
  Typography,
  List,
  Avatar,
  Card,
  Grid,
  Paper,
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
                <Paper
                  key={v4()}
                  style={{ padding: '40px 20px', marginTop: 10 }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar alt="Users image profile" src={value.userimg} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                      <h4 style={{ margin: 0, textAlign: 'left' }}>
                        {value.user}
                      </h4>
                      <p style={{ textAlign: 'left' }}>{value.comment}</p>
                      <p style={{ textAlign: 'left', color: 'gray' }}>
                        posted {value.commentTime}
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
          </List>
        </Box>
      </Card>
      <ArticleInput />
    </>
  );
}
