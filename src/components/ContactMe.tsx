import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import { Container } from '../styles/components/ContactMe';

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(data => {
    console.log('enviando email');
    console.log('data', data);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    })
  }, []);

  return(
    <Container>
      <div className="text-center-row">
        <h1 className="text-uppercase">Contato</h1>
        <h3 className="text-muted">Deixe sua mensagem para batermos um papo</h3>
      </div>
      <div className="contact-form-div">
        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input name="name" label="Nome" value={name} onChange={e => setName(e.target.value)}/>
          <Input name="mail" label="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <Input name="subject" label="Assunto" value={subject} onChange={e => setSubject(e.target.value)} />
          <TextArea name="message" label="Mensagem" value={message} onChange={e => setMessage(e.target.value)} />
          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </Container>
  );
}

export default ContactMe;