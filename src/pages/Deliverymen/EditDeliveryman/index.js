import React from 'react';

export default function EditDeliveryman(deliveryman) {
  const { id } = deliveryman.match.params;

  return (
    <>
      <h1>Edit Deliveryman #{id}</h1>
    </>
  );
}
