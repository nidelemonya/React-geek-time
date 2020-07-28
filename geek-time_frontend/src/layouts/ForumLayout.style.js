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
    padding-top:0.25rem;
    font-size: .490741rem;
    font-weight: bold;
    color: #a5a5a5;
    a {
        font-size: .490741rem;
        /* padding-bottom:0.25rem; */
        margin-left: .388889rem;
        text-decoration: none;
        overflow:hidden;
        color:#777777;
    }
    .selected {
        font-size: .52rem;
        color: #363636;
        /* border-bottom:4px solid orange; */
        border-radius: 2px;
    }
    & > .forum-icon {
        flex: 1;
        position: absolute;
        right: .361111rem;
        font-size: .490741rem;
    }
`;
export const NavIcon = styled.div`
    position:absolute;
    left:.6rem;
    width: 0.6rem;
    height:0.08rem;
    border-radius:0.1rem;
    /* 设置动画过渡时间 */
    transition-duration: 0.5s;
    overflow:hidden;
    background-color:orange;
`;

export const Navbar = styled.div`
    margin-top:0.1rem;
    width: 5.8rem;
    height: .08rem;
`;