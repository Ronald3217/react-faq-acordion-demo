import './App.css';
import { useState } from 'react';
import { Acordion } from 'react-faq-acordion';
import styled from '@emotion/styled';

const ButtonsContainer = styled.div`
  text-align: center;
`;
const Button = styled.input`
  padding: 20px;
  color: #000;
  background-color: #fff;
  font-weight: bold;
  margin: 20px;
  
  &:hover {
    cursor: pointer;
  }
`;
const ButtonDark = styled(Button)`
  background-color: #000;
  color: #fff;
`;
const ButtonGreen = styled(Button)`
  background-color: #004d33;
  color: #fff;
`;
const ButtonBlue = styled(Button)`
  background-color: #0e57b7;
  color: #fff;
`;
const ButtonPurple = styled(Button)`
  background-color: rgb(150, 134, 255);
  color: #fff;
`;

function App() {
   const initialData = [
    {
      title: "Heading Number 1?",
      paragraph: "Some Answer Here"
    },
    {
      title: "Heading Number 2",
      paragraph:
        "lorem ipsum dolor sit amet lorem ipsum lorem ips"
    },
    {
      title: "Heading Number 3",
      paragraph:
        "lorem ipsum dolor sit amet lorem ipsum lorem ips"
    },
    {
      title: "Heading Number 4",
      paragraph:
        "Some Paragraph Here"
    }
  ];
  const [theme, setTheme] = useState('green');
  const [data, setData] = useState(initialData);

  const handleThemeChange = (e)=>{
    console.log(e.target.name);
    setTheme(e.target.name)
  }
  return (
    <div className="App">
      <ButtonsContainer>
        <Button 
        type="button" value="Default"
        name=""
        onClick={handleThemeChange}
      />
      <ButtonDark 
        type="button" value="Dark"
        name="dark"
        onClick={handleThemeChange}
      />
      <ButtonGreen 
        type="button" value="Green"
        name="green"
        onClick={handleThemeChange}
      />
      <ButtonBlue
        type="button" value="Blue"
        name="blue"
        onClick={handleThemeChange}
      />
      <ButtonPurple
        type="button" value="Purple"
        name="purple"
        onClick={handleThemeChange}
      />
      </ButtonsContainer>
      <Acordion data={data} theme={theme} />
    </div>
  );
}

export default App;
