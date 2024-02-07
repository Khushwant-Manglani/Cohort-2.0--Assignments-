import { useState } from 'react'

function App() {
  const [person, setPerson] = useState({
    name: "Khushwant",
    description: "I am an engineering student of 4th year undergraduate",
    interest: ["DSA", "Web Dev"],
    linkedinUrl: "",
    twitterUrl: ""
  })

  return (
    <>
      <CardWrapper person={person} ></CardWrapper>
    </>
  )
}

function CardWrapper({person}) {
  return (
    <div style={styles.card}>
      <h1>{person.name}</h1>
      <p>{person.description}</p>
      <h2>Interests</h2>
      <p>{
        person.interest.map((interest) => <p>{interest}</p>)
      }</p>
      
      <a href={person.linkedinUrl}><button style={styles.linkedin_btn}>LinkedIn</button></a>
      <a href={person.twitterUrlUrl}><button style={styles.twitter_btn}>Twitter</button></a>
    </div>
  )
}

export default App

const styles = {
  card: { 
    border: "1px solid rgba(0,0,0, 0.2)", 
    padding: 50, 
    borderRadius: 10, 
    width: 390, 
    marginLeft: 520, 
    marginTop: 150, 
    fontFamily: "sans-serif", 
    backgroundColor: 'whitesmoke' 
  },

  linkedin_btn: {
    backgroundColor: "rgb(41 113 255)", 
    color: "white", 
    cursor: "pointer", 
    padding: 12, 
    paddingLeft: 15, 
    paddingRight: 15, 
    borderRadius: 6
  },

  twitter_btn: {
    backgroundColor: "rgb(41 113 255)", 
    color: "white", 
    cursor: "pointer", 
    padding: 12, 
    paddingLeft: 15, 
    paddingRight: 15, 
    borderRadius: 6,
    marginLeft: 20
  }
}