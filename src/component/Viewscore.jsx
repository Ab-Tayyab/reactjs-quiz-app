import React, { useState } from 'react'
import { Box, Button } from "@mui/material";
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

const Viewscore = () => {
    const [show, setShow] = useState(false)
    const showquiz = () => {
        setShow(true)
    }
    return (
        <div style={styles.paperContainer}>
            {
                show ? (
                    <Quiz />
                ) : (
                    <Box sx={{
                        width: "200px",
                        margin: "auto",
                        position: "absolute",
                        bottom: "50%",
                        right: "45%"
                    }}>
                        <Button onClick={showquiz}
                            sx={{
                                background: "white",
                                color: "black",
                                width: "200px",
                                textAlign: "center",
                                borderRadius: "0px 20px 0px 20px",
                                "&:hover": {
                                    background: "red",
                                    color: "white"
                                },

                            }}>Start</Button>
                    </Box>
                )
            }
        </div>
    )
}
export default Viewscore