import React, { useRef } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import ContentForm from '~/components/ContentForm';
import { UnInput, InputGroup, ImageInput } from '~/components/Input';

export default function InsertDeliveryman() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().required('O email é obrigatório'),
        avatar_id: Yup.number().notRequired(),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.post('deliverymen', data);
      if (response.data.id) {
        toast.success('Entregador cadastrado com sucesso');
        history.push('/deliverymen');
      }
    } catch (err) {
      toast.error('Erro ao inserir entregador');

      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.log(validationErrors);
      }
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
        </Form>
      </ContentForm>
    </>
  );
}
