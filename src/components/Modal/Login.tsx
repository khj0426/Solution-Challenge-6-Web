import styled from 'styled-components';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
} from '@mui/material';
import newStore from '../Store/module';
import { SigninGoogle } from '../Login/SignInGoogle';
import { useState, useEffect } from 'react';

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(
    newStore.getState().persist.globalModal.modal
  );

  useEffect(() => {
    setOpen(newStore.getState().persist.globalModal.modal);
  }, [newStore.getState().persist.globalModal.modal]);

  return (
    <>
      <ModalPosition>
        <Dialog
          open={open}
          PaperProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
            },
          }}
        >
          <DialogContent>
            <Card
              sx={{ maxWidth: 500 }}
              style={{
                width: '350px',
                height: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                boxShadow: 'none',
              }}
            >
              <Typography
                variant="h3"
                component="div"
                style={{
                  fontWeight: '700',
                }}
              >
                BeP
              </Typography>
              <CardMedia
                sx={{ height: 200, width: 200 }}
                image="/img/Earth.gif"
                title="EarthImg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lets make a better planet together
                </Typography>
              </CardContent>
              <SigninGoogle />
            </Card>
          </DialogContent>
        </Dialog>
      </ModalPosition>
    </>
  );
}

const ModalPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
