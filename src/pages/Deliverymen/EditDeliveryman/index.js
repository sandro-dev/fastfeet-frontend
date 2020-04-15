import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import ContentForm from '~/components/ContentForm';
import { UnInput, InputGroup, ImageInput } from '~/components/Input';

export default function InsertDeliveryman(deliveryman) {
  const { id } = deliveryman.match.params;
  const formRef = useRef(null);
  const [noAvatar, setNoAvatar] = useState(false);
  const [fullname, setFullname] = useState('Deliveryman Fasteet');

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`deliverymen/${id}`);

      if (!response.data.avatar_id) {
        setNoAvatar(true);
        setFullname(response.data.name);
      }

      formRef.current.setData(response.data);
      formRef.current.setFieldValue('avatar_id', {
        id: response.data.avatar_id,
        ...response.data.avatar,
      });
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const response = await api.put(`deliverymen/${id}`, data);
      if (response.data.ok) {
        toast.success('Dados do entregador atualizado com sucesso');
        history.push('/deliverymen');
      }
    } catch (err) {
      toast.error('Erro ao atualizar dados do entregador');
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

      <ContentForm>
        <Form ref={formRef} id="deliverymen-form" onSubmit={handleSubmit}>
          <InputGroup>
            <ImageInput
              name="avatar_id"
              iconName={noAvatar}
              fullname={fullname}
            />
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
        </Form>
      </ContentForm>
    </>
  );
}
