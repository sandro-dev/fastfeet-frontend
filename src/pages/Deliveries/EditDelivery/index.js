import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderContent from '~/components/HeaderContent';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { SimpleInput } from '~/components/Input';

export default function EditDelivery(delivery) {
  const { id } = delivery.match.params;
  const [recipientId, setRecipientId] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymanId, setDeliverymanId] = useState(null);
  const [deliverymen, setDeliverymen] = useState([]);
  const [product, setProduct] = useState('');

  async function loadDeliverymen(str) {
    const response = await api.get(`deliverymen`, { params: { q: str } });
    const data = response.data.results.map((d) => ({
      label: d.name,
      value: d.id,
    }));
    setDeliverymen(data);
    return data;
  }
  async function loadRecipients(str) {
    const response = await api.get(`recipients`, { params: { q: str } });
    const data = response.data.results.map((r) => ({
      label: r.name,
      value: r.id,
    }));
    setRecipients(data);
    return data;
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`deliveries/${id}`);
      setRecipientId(response.data.recipient_id);
      setDeliverymanId(response.data.deliveryman_id);
      setProduct(response.data.product);
      console.log('product -->', response.data.product);
    }

    loadData();
    loadRecipients();
    // setRecipients(loadRecipients());
    loadDeliverymen();
    // setDeliverymen(loadDeliverymen());
  }, [id]);

  console.log('deliverymen --> ', deliverymen);
  console.log('recipients --> ', recipients);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.put(`deliveries/${id}`, {
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
          <h1>Edição de encomendas</h1>
        </div>
        <aside>
          <Button type="back" url="/deliveries" />
          <Button type="save" url="/deliveries" form="delivery-form" />
        </aside>
      </HeaderContent>

      <Form id="delivery-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group col2">
          <div className="input-block">
            <label htmlFor="destinatario">Destinatário </label>

            <AsyncSelect
              defaultOptions={(str) => loadRecipients(str)}
              loadOptions={(str) => loadRecipients(str)}
              value={recipients.filter((opt) => opt.value === recipientId)}
              placeholder="Busque pelo nome do destinatário"
              onChange={(option) => setRecipientId(option ? option.value : '')}
              styles={customAsync}
            />
          </div>

          <div className="input-block">
            <label htmlFor="destinatario">Entregador </label>
            <AsyncSelect
              defaultOptions={(str) => loadDeliverymen(str)}
              loadOptions={(str) => loadDeliverymen(str)}
              value={deliverymen.filter((opt) => opt.value === deliverymanId)}
              placeholder="Busque pelo nome do entregador"
              onChange={(option) =>
                setDeliverymanId(option ? option.value : '')
              }
              styles={customAsync}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="client">Nome do produto!!! </label>
            <SimpleInput
              type="text"
              name="product"
              id="product"
              value={product}
              placeholder="Nome do produto"
              onChange={() => {}}
            />
          </div>
        </div>
      </Form>
    </>
  );
}
