import styled from "styled-components"
import { useState } from "react"

import { palette } from "../../styles/palette"
import InputWithIcon from "../InputWithLabel"
import { ButtonBlue } from "../ButtonStyled"


function DepartCreate({handleModal4}) {

    const [newDepart, setNewDepart] = useState([])

    const getValue = e => {
        const {value} = e.target;
        setNewDepart(value)
    };
    function departCreateFunction(){
        handleModal4()
    }

    return(
        <>
        <Title>채널 생성</Title>
        <DepartDiv>
            <p style={{fontSize: "35px", fontWeight: "bold"}}>채널명은 무엇인가요?</p>
            <span style={{fontSize: "15px", color: "gray", margin: "-20px 0 15px 0"}}>다른 사용자에게 보여질 채널의 이름을 지어주세요!</span>
            <InputDiv>
                <InputWithIcon onChange={getValue} placeholder="ex) SSAFY 7기"/>
            </InputDiv>
        </DepartDiv>
            <CustomButtonBlue onClick={() => {departCreateFunction()}}>생성</CustomButtonBlue>
        </>
    )
}

const Title = styled.span`
    background: ${palette.main_grBlue};
    color: transparent;
    -webkit-background-clip: text;
    font-size: 40px; 
    font-weight: bold;
    text-align: center;
`

const DepartDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const InputDiv = styled.div`
    width: 35vw;
    height: 10vh;
`

const CustomButtonBlue = styled(ButtonBlue)`
    width: 15vh;
    height: 3vw;
`
export default DepartCreate