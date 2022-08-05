import styled from "styled-components";

export const PeopleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 450px;
  height: 98vh;
  background-color: #474a57;
  margin-left: auto;
  border-radius: 25px;
  align-items: center;
`;

export const ScreenText = styled.div`
  color: white;
`;

export const OpenviduBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const VideoBox = styled.div`
  /* min-height: 1vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  justify-content: center;
  /* margin-left: auto; */
  /* background-color: #333333; */
`;
export const ChatBox = styled.div`
  width: 100%;
  height: 85%;
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    padding-right: 15px;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
export const MeetingRoom = styled.div`
  background-color: #333333;
  width: 100%;
  min-height: 100vh;
`;

export const SubStream = styled.div`
  /* width: ${(props) => (props.mainStream ? null : "100%")}; */
  width: 100%;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  min-height: ${(props) => (props.mainStream ? null : "80vh")};
  overflow-x: ${(props) => (props.mainStream ? "scroll" : null)};
  overflow-y: hidden;
  &::-webkit-scrollbar {
    padding-right: 15px;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
export const MeetingButtonControl = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChattingInputBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 100%;
  height: 30%;
  background-color: white;
  align-items: center;
`;
export const ChattingName = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const ChattingInput = styled.input`
  width: 95%;
  height: 45%;
  border-radius: 10px;
  border: none;
`;

export const ChattinBoxgWrapper = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ChattingSendButton = styled.button`
  border-radius: 8px;
  margin-left: auto;
  background-color: #dbeafe;
  border: none;
  width: 50px;
  height: 35px;
  margin-right: 15px;
  margin-top: auto;
  margin-bottom: 4px;
`;

export const ChattingBox = styled.div`
  margin-top: 20px;
  width: 95%;
  height: ${(props) => (props.openAttentList ? "45%" : "80%")};
`;
export const MeetingButtonWrapper = styled.div`
  position: fixed;
  bottom: 1%;
  left: 30%;
`;
export const MeetingButtons = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
`;

export const LayoutButton = styled.button`
  position: fixed;
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background: #333333;
  color: white;
  border-color: white;
  bottom: 10px;
  z-index: 1;
  left: 10px;
`;
const ScreenModeButton = styled.button`
  position: fixed;
  width: 180px;
  height: 50px;
  border-radius: 10px;
  color: white;
  border-color: white;
  z-index: 1;
  left: 10px;
`;
export const FullscreenButton = styled(ScreenModeButton)`
  bottom: 65px;
  background: ${(props) =>
    props.fullScreenLayoutMode ? "#DBEAFE" : "#333333"};
  color: ${(props) => (props.fullScreenLayoutMode ? "black" : "white")};
`;
export const NotFullScreenButton = styled(ScreenModeButton)`
  background: ${(props) =>
    props.fullScreenLayoutMode ? "#333333" : "#DBEAFE"};
  bottom: 120px;
  color: ${(props) => (props.fullScreenLayoutMode ? "white" : "black")};
`;
export const MeetingButton = styled.button`
  border-color: white;
  background: #333333;
  border-radius: 15px;
  color: white;
  width: 160px;
  height: 50px;
  margin-right: 5px;
  margin-left: 3px;
`;
export const MeetingAttendAndChattingWrapper = styled.span`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MeetingAttendAndChattingButton = styled.button`
  border: none;
  border-radius: 8px;
  /* background-color: #cfd1dc; */
  color: black;
  text-align: center;
  width: 40%;
  height: 60%;
  margin-right: 3px;
  margin-left: 3px;
  background-color: ${(props) => (props.isClick ? "#DBEAFE" : "#7A7C87")};
  /*  inset,0px 0px 5px rgba(200,200,200,0.5);  */
`;