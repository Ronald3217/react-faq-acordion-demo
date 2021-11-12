import './App.css';
import { useState } from 'react';
import { Accordion } from 'react-faq-acordion';
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
const ButtonNetflix = styled(Button)`
  background-color: #303030;
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
const ButtonCustom = styled(Button)`
  background-color: #fff;
  color: #000;
`;
const InputContainer = styled.div`
  margin: 5px;
`;
const TextInput = styled.input`
  max-width: 400px;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
  transition: 0.3s all;
`;
const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  text-transform: capitalize;

  & span {
    color: #fff;
    text-transform: none;
  }
`;

function App() {
  const initialData = [
    {
      title: 'Heading Number 1?',
      paragraph: 'Some Answer Here',
    },
    {
      title: 'Heading Number 2',
      paragraph: 'lorem ipsum dolor sit amet lorem ipsum lorem ips',
    },
    {
      title: 'Heading Number 3',
      paragraph: 'lorem ipsum dolor sit amet lorem ipsum lorem ips',
    },
    {
      title: 'Heading Number 4',
      paragraph: 'Some Paragraph Here',
    },
  ];
  const [theme, setTheme] = useState('green');
  const [customTheme, setCustomTheme] = useState({});
  const [data, setData] = useState(initialData);

  const handleThemeChange = (e) => {
    console.log(e.target.name);
    setTheme(e.target.name);
  };
  const handleCustomThemeActivate = (e) => {
    setTheme(e.target.name);
  };
  const handleCustomThemeChange = (e) => {
    setCustomTheme({
      ...customTheme,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="App">
      <ButtonsContainer>
        <Button
          type="button"
          value="Default"
          name=""
          onClick={handleThemeChange}
        />
        <ButtonDark
          type="button"
          value="Dark"
          name="dark"
          onClick={handleThemeChange}
        />
        <ButtonNetflix
          type="button"
          value="Netflix"
          name="netflix"
          onClick={handleThemeChange}
        />
        <ButtonGreen
          type="button"
          value="Green"
          name="green"
          onClick={handleThemeChange}
        />
        <ButtonBlue
          type="button"
          value="Blue"
          name="blue"
          onClick={handleThemeChange}
        />
        <ButtonPurple
          type="button"
          value="Purple"
          name="purple"
          onClick={handleThemeChange}
        />
      </ButtonsContainer>
      <Accordion data={data} theme={theme} customTheme={customTheme} />
      <ButtonsContainer>
        <ButtonCustom
          type="button"
          value="Custom"
          name="custom"
          onClick={handleCustomThemeActivate}
        />
        <InputContainer>
          <Link
            href="https://github.com/Ronald3217/react-acordion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read How To Use, in <span>Github Readme.md</span>.
          </Link>
        </InputContainer>
        <InputContainer>
          <TextInput
            type="text"
            name="backgroundHeader"
            placeholder="color hexadecimal, rgb o rgba ex: #ffaf00"
            onChange={handleCustomThemeChange}
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            type="text"
            name="background"
            placeholder="color hexadecimal, rgb o rgba ex: #ffe4a9"
            onChange={handleCustomThemeChange}
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            type="text"
            name="color"
            placeholder="color hexadecimal, rgb o rgba ex: #000"
            onChange={handleCustomThemeChange}
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            type="text"
            name="borderBottom"
            placeholder=".5px solid #fff"
            onChange={handleCustomThemeChange}
          />
        </InputContainer>
      </ButtonsContainer>
    </div>
  );
}

export default App;
