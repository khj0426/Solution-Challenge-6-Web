import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  Card,
  ListItemText,
  Input,
  Button,
} from '@mui/material';


export default function EllipsisList() {
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
            <ListItem
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '5px',
              }}
            >
              <Avatar src="/static/images/avatar/1.jpg" />
              <ListItemText>
                <Typography>
                  Brunch this weekend? I&apos;ll be in your neighborhood doing
                  errands this Tuesday.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '5px',
              }}
            >
              <Avatar src="/static/images/avatar/2.jpg" />
              <ListItemText>
                <Typography>
                  Summer BBQ.Wish I could come, but I&apos;m out of town this
                  Friday.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Card>

      <Input placeholder="Go your chat" />
      <Button aria-label="Submit" variant="text">
        Go
      </Button>
    </>
  );
}
