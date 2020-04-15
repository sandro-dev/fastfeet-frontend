import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import ContentForm from '~/components/ContentForm';
import { InputGroup, UnInput, InputAsyncSelect } from '~/components/Input';

export default function InsertDelivery(delivery) {
  const { id } = delivery.match.params;
  const formRef = useRef(null);

  async function loadDeliverymen(str) {
    const response = await api.get(`deliverymen`, { params: { q: str } });
    const data = response.data.results.map((d) => ({
      label: d.name,
      value: d.id,
    }));
    return data;
  }
  async function loadRecipients(str) {
    const response = await api.get(`recipients`, { params: { q: str } });
    const data = response.data.results.map((r) => ({
      label: r.name,
      value: r.id,
    }));
    return data;
  }

  useEffect(() => {
    loadRecipients();
    loadDeliverymen();

    async function loadData() {
      const response = await api.get(`deliveries/${id}`);

      const { recipient, deliveryman } = response.data;
      formRef.current.setData(response.data);

      formRef.current.setFieldValue('recipient_id', {
        value: recipient.id,
        label: recipient.name,
      });
      formRef.current.setFieldValue('deliveryman_id', {
        value: deliveryman.id,
        label: deliveryman.name,
      });
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        deliveryman_id: Yup.number(),
        recipient_id: Yup.number(),
        product: Yup.string(),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.put(`deliveries/${id}`, data);
      if (response.data.ok) {
        toast.success('Encomenda atualizada com sucesso');
        history.push('/deliveries');
      }
    } catch (err) {
      toast.error('Erro ao atualizar a encomenda');
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

  const customAsync = {
    input: (styles) => ({
      ...styles,
      width: 360,
      height: 45,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  return (
    <>
      <HeaderContent>
        <div>
          <h1>Cadastro de encomendas</h1>
        </div>
        <aside>
          <Button type="back" url="/deliveries" />
          <Button type="save" form="delivery-form" />
        </aside>
      </HeaderContent>

      <ContentForm>
        <Form ref={formRef} id="delivery-form" onSubmit={handleSubmit}>
          <InputGroup columns={2}>
            <div className="input-block">
              <label htmlFor="destinatario">Destinatário </label>

              <InputAsyncSelect
                name="recipient_id"
                loadOptions={loadRecipients}
                placeholder="Busque pelo nome do destinatário"
                styles={customAsync}
              />
            </div>

            <div className="input-block">
              <label htmlFor="destinatario">Entregador </label>
              <InputAsyncSelect
                name="deliveryman_id"
                loadOptions={loadDeliverymen}
                placeholder="Busque pelo nome do entregador"
                styles={customAsync}
              />
            </div>
          </InputGroup>

          <InputGroup>
            <div className="input-block">
              <UnInput
                type="text"
                name="product"
                label="Nome do Produto"
                placeholder="Nome do produto"
              />
            </div>
          </InputGroup>
        </Form>
      </ContentForm>
    </>
  );
}
