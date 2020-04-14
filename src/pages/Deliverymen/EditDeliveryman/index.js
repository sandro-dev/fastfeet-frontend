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
  const [preview, setPreview] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`deliverymen/${id}`);
      if (response) {
        console.log('data -->', response.data);
        // const avatar = response.data.avatar.url;
        setPreview(response.data.avatar.url);
        formRef.current.setData(response.data);
        // formRef.current.setFieldValue('avatar_id', { id: 105, ...avatar });
      }
    }
    loadData();
  }, [id]);

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

      <ContentForm>
        <Form ref={formRef} id="deliverymen-form" onSubmit={handleSubmit}>
          <InputGroup>
            <ImageInput name="avatar_id" imagePreview={preview} />
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
