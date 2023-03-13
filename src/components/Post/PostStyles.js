import styled from "styled-components/native";

export const PostView = styled.View`
  width: 100%;
  margin-bottom: .25em;
  padding: .5em;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 10px;
  overflow: hidden;
`;

export const PostImg = styled.Image`
  width: 75px;
  aspect-ratio: 1/1;
  margin-right: 1em;
  border-radius: inherit;
`;

export const PostContent = styled.View`
  display: flex;
  flex-direction: column;
`;
