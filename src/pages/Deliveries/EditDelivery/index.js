import React from 'react';

export default function EditDelivery(delivery) {
  const { id } = delivery.match.params;

  return (
    <>
      <h1>Edit Delivery {id}</h1>
      <h2>{delivery.recipient.name}</h2>
    </>
  );
}
