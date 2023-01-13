import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Conteiner = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;

    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);

    :valid,:-webkit-autofill ,:placeholder-shown {
      width: 100%;
      height: 3rem;
      border-radius: 0.5rem;

      background: rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4.3px);
      -webkit-backdrop-filter: blur(4.3px);
    }
    ::placeholder,:-webkit-autofill,
    :placeholder-shown {
      font-family: inherit;
      color: ${Colors.textColorLight};
      padding-left: 1rem;
    }

    :focus {
      background: rgba(12, 12, 12, 0.15);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8.9px);
      -webkit-backdrop-filter: blur(8.9px);

      border: 1px solid rgba(255, 255, 255, 0.41);
    }
  }
`;
