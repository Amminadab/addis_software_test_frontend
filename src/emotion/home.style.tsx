import { ToggleButtonProps, InputProps } from "../interface/interface";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #155681;
  color: rgb(64, 224, 208);
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: rgb(64, 224, 208);
      color: #333;
    `}
`;

export const Button = styled.button`
  background-color: rgb(64, 224, 208);
  color: white;
  font-size: 16px;
  padding: 16px;
  border: 0;
  border-radius: 0.6rem;
  margin-top: 1rem;
  transition: all 0.4s;
  &:hover {
    background-color: rgb(46, 182, 168);
  }
  @media (max-width: 960px) {
    padding: 14px;
  }
  @media (max-width: 424px) {
    padding: 12px;
    margin-left: 16px;
  }
`;

export const WrapperSection = styled.div`
  padding: 2rem 4rem;
  position: relative;
  height: 500px;
  ${() => css`
    @media (max-width: 1000px) {
      padding: 1.2rem 2.4rem;
    }
    @media (max-width: 540px) {
      padding: 1rem 2rem;
    }
  `}
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: absolute;
  border-radius: 1rem;
  border: none;
  z-index: -100;
`;

export const Paragraph = styled.p`
  color: white;
  font-weight: 500;
  font-size: 3.2rem;
  margin-bottom: 10rem;
  ${() => css`
    @media (max-width: 960px) {
      margin-bottom: 6rem;

      font-size: 2.4rem;
    }
    @media (max-width: 540px) {
      font-size: 2rem;
    }
  `}
`;

export const ParagraphSmall = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 10rem;
  text-align: center;
`;

export const InputStyles = styled.input<InputProps>`
  padding: 12px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 0.6rem;
  outline: none;
  &:focus {
    border-color: rgb(64, 224, 208);
    box-shadow: 0 0 3px rgb(64, 224, 208);
  }
  ${({ variant }) =>
    variant === "primary" &&
    css`
      width: 16rem;
    `}
  @media (max-width: 380px) {
    max-width: 15rem;
  }
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      width: 6rem;
    `}
  ${() => css`
    @media (max-width: 960px) {
      padding: 10px;
    }
    @media (max-width: 540px) {
      padding: 10px;
    }
  `}
`;

export const SelectStyles = styled.select`
  max-width: 7rem;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 0.6rem;
  background-color: #fff;
  color: #333;
  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: rgb(64, 224, 208);
    box-shadow: 0 0 0 2px rgb(64, 224, 208);
  }
  @media (max-width: 960px) {
    padding: 14px;
  }
  @media (max-width: 540px) {
    padding: 12px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-items: center;
`;

export const OptionStyles = styled.option`
  background-color: #fff;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MusicCard = styled.div`
  padding: 10px;
  position: relative;
  border: 1px solid #ccc;
  background: linear-gradient(to bottom right, #ffffff, rgb(64, 224, 208));
  border-radius: 4px;
`;

export const MusicImage = styled.img`
  width: 4rem;
  position: absolute;
  top: 2rem;
  right: 0;
`;
