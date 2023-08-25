import webImg from "../../assets/web.json"
import cloudImg from "../../assets/cloud.json"
import androidImg from "../../assets/android-robot.gif"
import cyberImg from "../../assets/cyber.json"
// import mlLight from '../../assets/mlLight.gif'
import mlLight1 from '../../assets/ml.json'
// import mlDark from '../../assets/mlDark.gif'
import cp from "../../assets/cp.json"

import android from "../../assets/android.json"

let info = [
    {
        span: "Android",
        heading: "Development",
        description: "Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.",
        img: android,
        link: "https://codelabs.developers.google.com/?cat=Android",
        reverse: false,
        color: "#14B25F",
        bgColor: "#E7F7E7",
    },
    {
        span: "Web",
        heading: "Development",
        description: "Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.",
        img: webImg,
        link: "https://codelabs.developers.google.com/?cat=Web",
        reverse: true,
        color: "#FFB808",
        bgColor: "none",
    },
    {
        span: "Cloud",
        heading: "Computing",
        description: "For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.",
        img: cloudImg,
        link: "https://codelabs.developers.google.com/?cat=Cloud",
        reverse: false,
        color: "#4A90F4",
        bgColor: "#EDF4FE",
    },
    {
        span: "Machine",
        heading: "Learning",
        description: "Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to automatically learn and improve from experience without being explicitly programmed.",
        img: mlLight1,
        link: "https://codelabs.developers.google.com/?cat=TensorFlow",
        reverse: true,
        color: "#14B25F",
        bgColor: "none",
    },
    {
        span: "Cyber",
        heading: "Security",
        description: "With exponential rise in digital world, the attacks are rising more and more. Learn how to keep your applications safe in this world of information technology.",
        img: cyberImg,
        link: null,
        reverse: false,
        color: "#F74037",
        bgColor: "#FEECEB",
    },
    {
        span: "Competitve",
        heading: "Programming",
        description: "With ever-increasing competition in the IT industry, learn how to keep your knowledge sharp with competitive programming. It will enhance your problem solving skills, logic and many more.",
        img: cp,
        link: null,
        reverse: true,
        color: "#4A90F4",
        bgColor: "none",
    },
]


export default info;