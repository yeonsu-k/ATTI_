import styled from 'styled-components';
import { useState, useCallback } from 'react';

import CommunityBg from '../assets/images/communityBG.png'
import DepartCreate from '../components/Community/DepartCreate';
import Modal from '../components/Modal';
import { ButtonBlue } from '../components/ButtonStyled';
import { palette } from '../styles/palette';

// 테스트용
import CategoryCreate from '../components/Community/CategoryCreate';

function Welcome(){

  const [isOpenModal4, setOpenModal4] = useState(false);
    const onClickToggleModal4 = useCallback(() => {
      setOpenModal4(!isOpenModal4);
      }, [isOpenModal4]);

    const handleModal4 = () => {
      setOpenModal4((prev) => {
        return !prev}
      );
    }

    const [isOpenModal5, setOpenModal5] = useState(false);
    const onClickToggleModal5 = useCallback(() => {
      setOpenModal5(!isOpenModal5);
      }, [isOpenModal5]);

    const handleModal5 = () => {
      setOpenModal5((prev) => {
        return !prev}
      );
    }
    const [newDepart, setNewDepart] = useState([])
    const getValue = (e: any) => {
      const {value} = e.target;
      setNewDepart(value)
  };

  return(
    <>
    <WelcomeDiv>
      <Main>
        <Container>     
          <Title>
            <p>아띠(ATTI) 에 오신 것을 환영합니다!</p>
          </Title>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Title>
              <p>채널을 생성하여 다양한 기능을 누려보세요!</p>
            </Title>
            <CustomButtonBlue onClick={handleModal4}> 채널 생성</CustomButtonBlue>
          </div>
          <div>
            <Title>
              <p>혹은 참여 코드를 입력하여 채널에 입장하세요!</p>
            </Title>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <CustomInputWithIcon onChange={getValue} />
              {/* 입장 부분 이벤트는 이게 아님, 그냥 넣어둠 */}
              <CustomButtonBlue onClick={handleModal5}> 채널 입장</CustomButtonBlue>

            </div>

          </div>

        </Container>
  
      </Main>

    </WelcomeDiv>


      {isOpenModal4 && (
        <Modal
          onClickToggleModal={onClickToggleModal4}
          width="800px"
          height="400px"
        >
          <DepartCreate handleModal4={handleModal4} />
        </Modal>
      )}
       {isOpenModal5 && (
        <Modal
          onClickToggleModal={onClickToggleModal5}
          width="1000px"
          height="800px"
        >
          <CategoryCreate />
        </Modal>
      )}
    </>
  );
}

const WelcomeDiv = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  overflow: hidden;
  width: 80vw;
  height: 879px;
  border-radius: 20px;
  background-color: white;
  margin: 20px 50px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-end;
  margin: 0;
  background: url('${CommunityBg}') no-repeat;
  background-size: cover !important; 
  background-position: center !important;
  `;

const Title = styled.div`
    font-size: 40px; 
    font-weight: bold;
    margin: 0 0 0 50px;
`;
const CustomButtonBlue = styled(ButtonBlue)`
    width: 220px;
    height: 60px;
    margin: 0 250px 0 0;
    font-size: 25px;
`;
const CustomInputWithIcon = styled.input`
  width: 800px;
  height: 100px;
  border: 2px solid ${palette.blue_3};
  border-radius: 20px;
  margin: 0 0 0 50px;
  font-size: 45px;
  font-weight: bold;
  outline: none;
`;
  export default Welcome;
  