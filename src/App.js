import React, { useEffect, useState } from 'react';
import styled from "styled-components";

export const App = () => {
  const urlFiles= "http://localhost:3000/files";
  const [files, setFiles] = useState([]);
  const getFiles = () => {
    fetch(urlFiles)
      .then(res => res.json())
      .then(json => setFiles(json));
  };

  useEffect(() => {
    getFiles();
  }, []);

  const getDate = (time) => {
const date = new Date(time)
return date.toLocaleDateString("sv-SE")
  }
  
  return (
    <AppWrapper>
      <FlexHeader>
      <h1>File Archive</h1>
    <Button>New file</Button>
    </FlexHeader>
    <Flex>
      <FlexChild bold>Name</FlexChild>
        <FlexChild bold>Description</FlexChild>
        <FlexChild bold>Type</FlexChild>
        <FlexChild bold>Created at</FlexChild>
      {files && files.map(file => (
        <>
        <FlexChild>{file.name}</FlexChild>
        <FlexChild>{file.description}</FlexChild>
        <FlexChild>{file.type}</FlexChild>
        <FlexChild>{getDate(file.createdAt)}</FlexChild>
        </>
      ))}
    </Flex>
    </AppWrapper>
  )}

const AppWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const FlexHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: baseline;
width: 50%;

`

const Button = styled.button`
padding: 0.5rem 1rem;
border-radius: 20px;
`

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
`
const FlexChild = styled.div`
width: 20%;
padding: 0.5rem;
border: 1px solid black;
font-weight: ${props => props.bold ? 700 : 400 }
`
