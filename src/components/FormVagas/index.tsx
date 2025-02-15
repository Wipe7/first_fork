import React, { FormEvent, ChangeEvent, useState } from 'react'
import { FormPesquisa, InputPesquisar, ButtonPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisar
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
    </FormPesquisa>
  )
}

export default FormVagas
