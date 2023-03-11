const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

//one object
function getObjectAll(all) {
  for (i = 0; i < users.length; i++) {
    return users[i];
  }
}
console.log(getObjectAll(users));

//more skills user
function getMoreSkills(skill) {
  let moreSkill = users[0].skills.length;
  let name;
  for (i = 0; i < skill.length; i++) {
    if (moreSkill < users[i].skills.length) {
      moreSkill = users[i].skills.length;
      name = users[i].name;
    }
  }
  console.log(
    " Hamgiin ih skill ezemshsen hvn:",
    name,
    "\n",
    "skills number:",
    moreSkill
  );
}
getMoreSkills(users);

//points 50+
function getFiftyPoint(points) {
  console.log(" ");
  console.log("50 ias ih onoo awsn suragchid");
  for (i = 0; i < points.length; i++) {
    if (points[i].points >= 50) {
      console.log(points[i].name, points[i].points);
    }
  }
}
getFiftyPoint(users);

//MERN ( MongoDB, Express, React, Node ) hugjvvlegch
function getMern(mern) {
  for (i = 0; i < mern.length; i++) {
    for (j = 0; j < mern[i].skills.length; j++) {
      if (
        mern[i].skills[j] == "MongoDB" &&
        mern[i].skills[j] == "Express" &&
        mern[i].skills[j] == "React" &&
        mern[i].skills[j] == "Node"
      ) {
        return mern[i].name;
      }
    }
  }
}
console.log(getMern(users));

//hamgiin ih nastai
function GetAge(age) {
  let lotAge = users[0].age;
  let nam = age[0].name;
  for (i = 1; i < age.length; i++) {
    if (lotAge < age[i].age) {
      lotAge = age[i].age;
      nam = age[i].name;
    }
  }
  console.log(" Hamgiin ih nastai hvn:", nam, "\n", "nas:", lotAge);
}
GetAge(users);
