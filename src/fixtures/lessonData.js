import React from'react';
import { Text, View, Image } from 'react-native';
import YellowNote from '../components/UI/YellowNote';
import TextLink from '../components/UI/TextLink';
import questionCard from '../assets/part2card.png';

const lessons = {
    general: [
        {
            name: "About IELTS Speaking",
            
            icon: "info-circle",
            style : {
                backgroundColor: "#123456"
            },
            content: [
                <Text key={0} style={{fontSize: 18}}>1.The speaking test is conducted face to face with an examiner.{"\n\n"}2.It will be recorded so it can be reviewed and remarked if necessary.{"\n\n"}3.The examiner will decide on your band score at the end of the test.{"\n\n"}4.The test will take between 11 and 14 minutes.{"\n\n"}5.The test comprises of:</Text>,
                <Text key={1} style={{fontSize: 18, paddingLeft: 10}}>- ID check and greeting</Text>,
                <Text key={2} style={{fontSize: 18, paddingLeft: 10}}>- Part 1 = questions and answers, 4-5 minutes</Text>,
                <Text key={3} style={{fontSize: 18, paddingLeft: 10}}>- Part 2 = a 1-2 minute talk</Text>,
                <Text key={4} style={{fontSize: 18, paddingLeft: 10}}>- Part 3 = discussion questions, 4-5 minutes{"\n\n"}</Text>,
                <YellowNote key={5}>For more information on the individual parts of the test, check out the rest of our lessons section.</YellowNote>

            ]

            
        },
        {
            name: "How IELTS Speaking is Graded",
            icon: "check",
            style: {
                backgroundColor: "#555"
            },
            content: [
            <Text key={0} style={{fontSize: 18}}>The speaking part of the IELTS test is marked over four categories.{"\n\n"}<Text style={{fontWeight: "bold", paddingLeft: 5}}>Fluency and Cohesion</Text>{"\n"}To get good marks in this category, you should speak at a natural pace without hesitation while demonstarting good use of discourse markers.{"\n\n"}<Text style={{fontWeight: "bold"}}>Lexical Resource</Text>{"\n"}This part is all about your vocabulary. The examiner will be listening for the range and flexibility of the language you use{"\n\n"}<Text style={{fontWeight: "bold"}}>Grammatical Range and Accuracy</Text>{"\n"}You'll get a good grade in this if you can use a lot of different grammar patterns without making lots of mistakes.{"\n\n"}<Text style={{fontWeight: "bold"}}>Pronunciation</Text>{"\n"}For this, the examiner will be taking note of how well you pronounce individual words, as well as the overall intonation and rhythm of your speech.{"\n\n"}</Text>,
            <YellowNote key={1}>To get the band score you are aiming for, we recommend that you complete the practice tests and listen to your answers carefully, evaluating how well you are doing in these four categories. If you submit your test for grading, you will recieve feedback to help you improve.</YellowNote>

            ]
        },
        {
            name: "Paraphrasing",
            
            icon: "hat-wizard",
            style : {
                backgroundColor: "#654321"
            },
            content: [
                <Text key={0} style={{fontSize: 18}}>In our long experience of IELTS instruction, we have found that the ability to use and undertand paraphrasing is one of the most important skills to have when trying to achieve a top band score.{"\n\n"} Being able to 'say something in a different way' will help test takers get better results in all parts of the IELTS test.{"\n\n"}In the speaking section, paraphrasing should be used whenever you want to use parts of the question in your answers.{"\n\n"}For example, when asked a question like:</Text>,
                <View key={1} style={{backgroundColor: "#e0e0e0", padding: 20}}><Text style={{fontSize: 18, fontWeight: "bold"}}>Which part of your hometown do you think is the most interesting?</Text></View>,
                <Text key={2} style={{fontSize: 18}}>Many English learners use part of the question in their answer:</Text>,
                <View key={3} style={{backgroundColor: "#e0e0e0", padding: 20}}><Text style={{fontSize: 18, fontWeight: "bold"}}>I think the most interesting part of my hometown is....</Text></View>,
                <Text key={4} style={{fontSize: 18}}>A better approach is to paraphrase the question:</Text>,
                <View key={5} style={{backgroundColor: "#e0e0e0", padding: 20}}><Text style={{fontSize: 18, fontWeight: "bold"}}>To my mind, a facinating part of the city I hail from is.....</Text></View>,
                <Text key={6} style={{fontSize: 18}}>This shows the examiner that you can naturally and fluently use a wider range of vocabulary.{"\n\n"}</Text>,
                <YellowNote>For some ideas on how to go about using paraphrasing in your answers, check out the example answers section of this app.</YellowNote>


            ]

            
        }
    ],
    partOne: [
        {
            name: "About Part One",
            icon: "info-circle",
            style: {
                backgroundColor: "#122345"
            },
            content: [
                <Text key={0} style={{fontSize: 18}}>In part 1 of the speaking test, you will be asked a series of questions about your life and experience. This part of the test will take 4-5 minutes and all of the questions will be on familiar topics such as:</Text>,
                <Text key={1} style={{fontSize: 18, paddingLeft: 10}}>-Work</Text>,
                <Text key={2} style={{fontSize: 18, paddingLeft: 10}}>-Study</Text>,
                <Text key={3} style={{fontSize: 18, paddingLeft: 10}}>-Hometown</Text>,
                <Text key={4} style={{fontSize: 18, paddingLeft: 10}}>-Family</Text>,
                <Text key={5} style={{fontSize: 18, paddingLeft: 10}}>-Work</Text>,
                <Text key={6} style={{fontSize: 18, paddingLeft: 10}}>-Hobbies, etc.{"\n\n"}</Text>,
                <YellowNote key={7}>Answers to these questions should be brief but not too short. For a simple way to construct your answers to the part 1 questions, check out our lesson on the REDS strategy.</YellowNote>
            ]
        },
        {
            name: "REDS Strategy",
            icon: "comment",
            style: {
                backgroundColor: "#557219"
            },
            content: {

            }
        }
    ],
    partTwo: [
        {
            name: "About Part Two",
            icon: "info-circle",
            style: {
                backgroundColor: "#122345"
            },
            content: [
            <Text key={0} style={{fontSize: 18}}>     In part 2, the examiner will give you a card with details of the subject you will be required to speak about.{"\n\n"}You will be allowed <Text style={{fontWeight: "bold"}}>only 60 seconds</Text> to plan your answer. You may write notes in this time. You will then give your answer.{"\n\n"} You should aim to speak for <Text style={{fontWeight: "bold"}}>1 - 2 minutes.{"\n\n"}</Text>The card will look something like this:</Text>,
            <Image key={1} source={questionCard} style={{width: "100%", resizeMode: "contain", }} />,
            <YellowNote key={2}>Speaking for an extended period can seem scary if you haven't practiced it much. Test takers often find they run out of things to say too quickly. For help with how to practice planning your answers, try our lesson on planning IELTS speaking part 2.</YellowNote>
            ]
        },
        {
            name: "Mind-map Planning",
            icon: "map-signs",
            style: {
                backgroundColor: "#557219"
            },
            content: {

            }
        }
    ],
    partThree: [
        {
            name: "About Part Three",
            icon: "info-circle",
            style: {
                backgroundColor: "#122345"
            },
            content: {

            }
        },
        {
            name: "Part Three Strategy",
            icon: "comment",
            style: {
                backgroundColor: "#557219"
            },
            content: {

            }
        }
    ]
}

export default lessons;
// const styles = {
//     container: {
//         width: "100%",
//         height: "100%",
//         backgroundColor: "#d3d3d3",
//         padding: 5
//     },
//     card: {
//         backgroundColor: "white",
//         elevation: 30
//     }
// }