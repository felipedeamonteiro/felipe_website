import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from './Input';
import TextArea from './TextArea';
import { Container } from '../styles/components/ContactMe';

const ContactMe: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(data => {
    console.log('enviando email');
    console.log('data', data);
  }, []);

  return(
    <Container>
      <div className="text-center-row">
        <h2 className="text-uppercase">Contato</h2>
        <h3 className="text-muted">Deixe sua mensagem para batermos um papo</h3>
      </div>
      <div className="contact-form-div">
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="nome" label="Nome" />
          <Input name="email" label="E-mail" />
          <Input name="assunto" label="Assunto" />
          <TextArea name="mensagem" label="Mensagem" />
        </Form>
      </div>
    </Container>
  );
}

export default ContactMe;