import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 16px;
    text-align: left;
`;