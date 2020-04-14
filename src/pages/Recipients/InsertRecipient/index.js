import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import Unform from '~/components/Unform';
import { UnInput, InputGroup } from '~/components/Input';

export default function InsertRecipient() {
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
          <Button type="save" form="recipients-form" />
        </aside>
      </HeaderContent>

      <Unform id="recipients-form" onSubmit={handleSubmit}>
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
      </Unform>
    </>
  );
}
