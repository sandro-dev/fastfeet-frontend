import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import Unform from '~/components/Unform';
import { UnInput, InputGroup, ImageInput } from '~/components/Input';

export default function InsertDeliveryman() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const response = await api.post('deliverymen', data);
      if (response.data.id) {
        toast.success('Entregador cadastrado com sucesso');
        history.push('/deliverymen');
      }
    } catch (err) {
      toast.error('Erro ao inserir entregador');
    }
  }

  return (
    <>
      <HeaderContent>
        <div>
          <h1>Cadastro de entregadores</h1>
        </div>
        <aside>
          <Button type="back" url="/deliverymen" />
          <Button type="save" url="/deliverymen" form="deliverymen-form" />
        </aside>
      </HeaderContent>

      <Unform id="deliverymen-form" ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <ImageInput name="avatar_id" />
        </InputGroup>
        <InputGroup>
          <div className="input-block">
            <UnInput
              type="text"
              name="name"
              label="Nome"
              placeholder="Nome do entregador"
            />
          </div>
        </InputGroup>

        <InputGroup>
          <div className="input-block">
            <UnInput
              type="email"
              name="email"
              label="Email"
              placeholder="seu@email.com"
            />
          </div>
        </InputGroup>
      </Unform>
    </>
  );
}
