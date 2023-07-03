import styled from 'styled-components';

export const ImageGalleryItems = styled.li``;

export const ImageGalleryImage = styled.img`
  width: 100%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  height: 30vh;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImageTagList = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 8px;
  span {
    background-color: rgb(238, 238, 238);
    border-radius: 2px;
    display: inline-block;
    font-size: 14px;
    line-height: 26px;
    padding-left: 8px;
    padding-right: 8px;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.1s ease-in-out 0s;
    color: #767676;
    font-weight: 400;
    font-size: 10px;
    &:hover {
      background-color: rgb(225, 225, 225);
      color: #111;
    }
  }
`;
