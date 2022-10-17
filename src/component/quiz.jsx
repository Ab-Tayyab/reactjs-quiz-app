import { Box, Typography, Button, Grid } from "@mui/material";
import react, { useState } from "react";
import './quiz.css'

let questionData = [
    {
        q: "Shortcut key to double underline the selected text is ------ ?",
        option: [
            "Ctrl + Alt + D",
            "Shift + Alt + U",
            "Ctrl + Shift + U",
            "Ctrl + Shift + D",
        ],
        ans: 3,
    },
    {
        q: "Shortcut to quit Microsoft Word Powerpoint Access Excel etc is ------------- ?",
        option: [
            "Alt + F4",
            "Ctrl + W",
            "Alt + W",
        ],
        ans: 0,
    },
    {
        q: "On the works cited page list works by each authors last name and--------the title of the work ?",
        option: [
            "italicize or underline",
            "boldface or italicize",
        ],
        ans: 0,
    },
    {
        q: "How do you magnify your document in Ms Word?",
        option: [
            "View Zoom",
            "Format Font",
            "Tools Options",
            "Tools Customize",
        ],
        ans: 0,
    },
    {
        q: "The effect applied to display when slides changes in slide show view is------ ?",
        option: [
            "Custom Animation",
            "Slide Animation",
            "Slide Transition",
            "Custom Transition",
        ],
        ans: 2,
    },
]
const Quiz = () => {

    const [data, setData] = useState(0);
    const [count, setCount] = useState(1);
    const [correctAns, setCorrectAns] = useState(0);
    const [showscore, setShowscore] = useState(false);
    console.log(correctAns)

    const nextQuestion = (event,index) => {
        let Tcount = count + 1;
        let nq = data + 1
        if (nq < questionData.length) {
            setData(nq)
            setCount(Tcount)
        }
        else {
            setShowscore(true)
        }

        if (index === questionData[data].ans) {
            setCorrectAns(correctAns + 1);
        }
    }

    const gotohomepage = () => {
        setShowscore(false)
        setData(0);
        setCorrectAns(0)
        setCount(1)
    }

    return (
        <div>
            {showscore ? (
                <Box sx={{
                    width: "250px",
                    height: "100px",
                    margin: "auto",
                    position: "absolute",
                    bottom: "50%",
                    right: "40%",
                    color:"white"
                }}>
                    <Typography variant="h3"
                    sx={{
                        textAlign:"center"
                    }}>{"Your score is " + correctAns + " out of " + questionData.length}</Typography>
                    <Button onClick={gotohomepage} sx={{
                        color:"white",
                        background:"green",
                        mt:"20px",
                        "&:hover":{
                            boxShadow:"2px 4px 6px white"
                        },
                    }}>Do you want to play again</Button>
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
                                {count + " OUT OF " + questionData.length}
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