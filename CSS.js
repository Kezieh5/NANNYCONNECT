import styled from 'styled-components';

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const StyledComponent = () => {
    return (
        <div>
            <Button>Submit</Button>
        </div>
    );
}

export default StyledComponent;
