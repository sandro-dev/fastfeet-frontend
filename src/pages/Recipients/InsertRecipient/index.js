import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import ContentForm from '~/components/ContentForm';
import { UnInput, InputGroup } from '~/components/Input';

export default function InsertRecipient() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const response = await api.post('recipients', data);
      if (response.data.recipient.id) {
        toast.success('Destinatário cadastrado com sucesso');
        history.push('/recipients');
      }
    } catch (error) {
      toast.error('Erro ao inserir destinatário');
    }
  }

  return (
    <>
      <HeaderContent>
        <div>
          <h1>Cadastro de destinatários</h1>
        </div>
        <aside>
          <Button type="back" url="/recipients" />
          <Button type="save" form="recipient-form" />
        </aside>
      </HeaderContent>

      <ContentForm>
        <Form ref={formRef} id="recipient-form" onSubmit={handleSubmit}>
          <InputGroup>
            <div className="input-block">
              <UnInput
                type="text"
                name="name"
                label="Nome"
                placeholder="Ludwig Van Beethoven"
              />
            </div>
          </InputGroup>

          <InputGroup template="4fr 1fr 1fr">
            <div className="input-block">
              <UnInput
                type="text"
                name="street"
                label="Rua"
                placeholder="Rua Beethoven"
              />
            </div>

            <div className="input-block">
              <UnInput
                type="text"
                name="number"
                label="Número"
                placeholder="1729"
              />
            </div>
            <div className="input-block">
              <UnInput
                type="text"
                name="complement"
                label="Complemento"
                placeholder="AP 108"
              />
            </div>
          </InputGroup>

          <InputGroup columns={3}>
            <div className="input-block">
              <UnInput
                type="text"
                name="city"
                label="Cidade"
                placeholder="Salvador"
              />
            </div>

            <div className="input-block">
              <UnInput
                type="text"
                name="state"
                label="Estado"
                placeholder="Bahia"
              />
            </div>

            <div className="input-block">
              <UnInput
                type="text"
                name="postcode"
                label="CEP"
                placeholder="09960-580"
              />
            </div>
          </InputGroup>
        </Form>
      </ContentForm>
    </>
  );
}
