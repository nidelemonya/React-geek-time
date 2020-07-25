import styled from 'styled-components';

export const Top = styled.div`
    width: 10rem;
    position: fixed;
    display: flex;
    align-items: center;
    height: 1.1730rem;
    border-bottom: .018519rem solid #f5f5f5;
    z-index: 99;
    top: 0;
    background-color: #ffffff;
`;

export const Title = styled.div`
    font-size: .490741rem;
    font-weight: bold;
    color: #a5a5a5;
    a {
        text-decoration: none;
        color:#777777
    }
    .selected {
        color: #363636;
    }
    & > .forum-icon {
        flex: 1;
        position: absolute;
        right: .361111rem;
        font-size: .490741rem;
    }
    & > a > .forum-name {
        margin-left: .388889rem;
    }
`;