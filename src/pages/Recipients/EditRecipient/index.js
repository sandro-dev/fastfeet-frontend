import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import ContentForm from '~/components/ContentForm';
import { UnInput, InputGroup } from '~/components/Input';

export default function EditRecipient(recipient) {
  const { id } = recipient.match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`recipients/${id}`);
      formRef.current.setData(response.data);
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('A rua é obrigatória'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string().notRequired(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        postcode: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.put(`recipients/${id}`, data);
      if (response.data.recipient.id) {
        toast.success('Destinatário atualizado com sucesso');
        history.push('/recipients');
      }
    } catch (err) {
      toast.error('Erro ao atualizar dados do destinatário');

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
          <h1>Edição de destinatários</h1>
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
