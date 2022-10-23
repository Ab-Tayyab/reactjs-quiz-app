import { Box, Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import questionData from "./API";

const Quiz = ({ show, open }) => {

    const [data, setData] = useState(0);
    const [questioncount, setCount] = useState(1);
    const [correctAns, setCorrectAns] = useState(0);
    const [showscore, setShowscore] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let myInterval;
    useEffect(() => {
        myInterval = setInterval(() => {
            setSeconds(seconds + 1)
            if (seconds == 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
            if (minutes == 2 && seconds == 30) {
                alert("Your time is up: your quize is submitted autometically, press ok to see your result")
                setShowscore(true)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });


    const nextQuestion = (event, index) => {
        let Tcount = questioncount + 1;
        let nextQ = data + 1
        if (seconds == 10) {
            setShowscore(true)
        }
        if (nextQ < questionData.length) {
            setData(nextQ)
            setCount(Tcount)
        }
        else {
            setShowscore(true)
        }

        if (index === questionData[data].ans) {
            setCorrectAns(correctAns + 1);
        }
    }


    // Rest quize
    const gotohomepage = () => {
        setShowscore(false)
        setData(0);
        setCorrectAns(0)
        setCount(1)
        setMinutes(0)
        setSeconds(0)
    }

    // Restart game
    const Restart = () => {
        show(false)
        open(false)
    }

    return (
        <div>
            {showscore ? (
                <Box sx={{
                    width: "250px",
                    height: "100px",
                    margin: "auto",
                    paddingTop: "200px",
                    color: "white"
                }}>
                    <Typography variant="h3"
                        sx={{
                            textAlign: "center"
                        }}>{"Your score is " + correctAns + " out of " + questionData.length}</Typography>
                    <Button onClick={gotohomepage} sx={{
                        color: "white",
                        background: "green",
                        mt: "20px",
                        "&:hover": {
                            boxShadow: "2px 4px 6px white"
                        },
                    }}>Do you want to play again</Button>
                    <Button onClick={Restart} sx={{
                        color: "white",
                        background: "green",
                        marginLeft: "70px",
                        mt: "20px",
                        "&:hover": {
                            boxShadow: "2px 4px 6px white"
                        },
                    }}>Main Menu</Button>
                </Box>
            ) : (

                <Grid container>
                    <Grid item md={4} xs={10} sx={{
                        margin: "auto",
                        textAlign: "center",
                        color: "white",
                        mt: "100px",
                    }}>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            mb: "20px",
                            pl: "10px",
                            pr: "10px",
                        }}>
                            <Button
                                sx={{
                                    color: "red",
                                    background: "black",
                                    "&:hover": {
                                        background: "black"
                                    },
                                }}>
                                {minutes < 10 ? "0" + minutes : minutes} :{seconds < 10 ? "0" + seconds : seconds}
                            </Button>
                            <Button
                                sx={{
                                    color: "red",
                                    background: "black",
                                    "&:hover": {
                                        background: "black"
                                    },
                                }}>
                                {questioncount + " OUT OF " + questionData.length}
                            </Button>
                        </Box>
                        <Typography>{questionData[data].q}</Typography>
                        {
                            questionData[data].option.map((question, index) => {
                                return (
                                    <Grid>
                                        <Button key={index}
                                            onClick={event => nextQuestion(event, index)}
                                            sx={{
                                                color: "black",
                                                background: "#B9FFF8",
                                                margin: "10px",
                                                width: "100%",
                                                height: "50px",
                                                "&:hover": {
                                                    color: "white",
                                                    boxShadow: "0px 4px 15px white"
                                                },
                                            }}>
                                            {question}
                                        </Button>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            )
            }
        </div >
    )
}
export default Quiz;