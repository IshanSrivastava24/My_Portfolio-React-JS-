import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "React JS Developer",
        about: "I can develop new user-facing features using React.js",
    },
    // {
    //     icon: api,
    //     title: "API Development",
    //     about: ["I can develop robust REST API using", <strong key={1}> django-rest-api </strong>]
    // },
    // {
    //     icon: algo,
    //     title: "Competitive Coder",
    //     about: "a daily problem solver in HackerRank and Leetcode"
    // },
    // {
    //     icon: puzzle,
    //     title: "UI/UX designer",
    //     about: "minimalistic user interface designer using figma and  framer"
    // },
    // {
    //     icon: puzzle,
    //     title: "React Native",
    //     about: "I can build a pixel-perfect, buttery smooth UIs across both mobile platforms"
    // },
]

export default skills;