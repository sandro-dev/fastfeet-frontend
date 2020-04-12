import React, { useState } from 'react';

import AsyncSelect from 'react-select/async';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { SimpleInput } from '~/components/Input';

export default function InsertDelivery() {
  const [recipientId, setRecipientId] = useState('');
  const [deliverymanId, setDeliverymanId] = useState('');
  const [product, setProduct] = useState('');

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('deliveries', {
        recipient_id: recipientId,
        deliveryman_id: deliverymanId,
        product,
      });

      if (response.data.id) {
        toast.success('Encomenda cadastrada com sucesso');
        history.push('/deliveries');
      }
    } catch (error) {
      toast.error('Erro ao inserir encomenda');
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
          <Button type="save" url="/deliveries" form="delivery-form" />
        </aside>
      </HeaderContent>

      <Form id="delivery-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group col2">
          <div className="input-block">
            <label htmlFor="destinatario"> Destinatário </label>
            <AsyncSelect
              placeholder="Busque pelo nome do destinatário"
              loadOptions={(str) => loadRecipients(str)}
              onChange={(option) => setRecipientId(option ? option.value : '')}
              styles={customAsync}
            />
          </div>

          <div className="input-block">
            <label htmlFor="destinatario"> Entregador </label>
            <AsyncSelect
              placeholder="Busque pelo nome do entregador"
              loadOptions={(str) => loadDeliverymen(str)}
              onChange={(option) =>
                setDeliverymanId(option ? option.value : '')
              }
              styles={customAsync}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="client">Nome do produto</label>
            <SimpleInput
              type="text"
              placeholder="Nome do produto"
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
        </div>
      </Form>
    </>
  );
}
