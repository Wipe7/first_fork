import styled from 'styled-components'

export const FormPesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
` as React.ComponentType<React.InputHTMLAttributes<HTMLFormElement>>

export const ButtonPesquisar = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
` as React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>

export const InputPesquisar = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};
` as React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>
