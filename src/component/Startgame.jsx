import React, { useState } from 'react'
import { Box, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Quiz from './quiz'
import img from './img.jpg'

const styles = {
    paperContainer: {
        height: 635,
        width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
};

const Startgame = () => {

    const [show, setShow] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showquiz = () => {
        setShow(true)
    }
    return (
        <div style={styles.paperContainer}>
            {
                show ? (
                    <Quiz show={setShow} open={setOpen} />
                ) : (

                    <Box sx={{
                        width: "200px",
                        margin: "auto",
                    }}>
                        <Button onClick={handleClickOpen}
                            sx={{
                                background: "white",
                                color: "black",
                                width: "200px",
                                marginTop: "280px",
                                textAlign: "center",
                                borderRadius: "0px 20px 0px 20px",
                                "&:hover": {
                                    background: "red",
                                    color: "white"
                                },
                            }}>
                            Start
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle>
                                {"Instructions"}
                            </DialogTitle>
                            <DialogContent>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            Your total time is 2 minutes and 30 seconds for 5 Questions. So each question have 30 seconds.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            After time completion quiz will be submitted autometically.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            When you click on option, next question will be show autometicly so please make sure you avoid un-eventually touch and select correct option
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={showquiz} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                )
            }
        </div>
    )
}
export default Startgame