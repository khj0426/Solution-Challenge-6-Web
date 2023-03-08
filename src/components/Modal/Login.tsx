import styled from 'styled-components';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  Button,
} from '@mui/material';
import newStore from '../Store/module';
import { SigninGoogle } from '../Login/SignInGoogle';
import { deactive } from '../Store/module/globalmodal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function LoginModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(
    newStore.getState().persist.globalModal.modal
  );
  const modalOff = () => {
    dispatch(deactive());
    setOpen(false); // update the state of the dialog
  };

  return (
    <>
      <ModalPosition>
        <Dialog
          onClose={modalOff}
          open={open}
          PaperProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #AAAAAA',
              borderRadius: '20px',
            },
          }}
        >
          <Button onClick={modalOff}>X</Button>
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
              }}
            >
              <Typography variant="h3" component="div">
                Bep
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
`;
