import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { send } from "emailjs-com";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-6`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const LoadingButton = tw.button`bg-red-600`;
const SvgLoading = tw.svg`animate-spin h-5 w-5 mr-3 `;

export default () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    phone: "",
    message: "",
    email: "",
  });
  const [showSuccess, setShowSucces] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_rhpb7bb",
      "template_ikpynsz",
      toSend,
      "user_jqufnScrkZVF1RuCIytqr"
    )
      .then((response) => {
        setShowSucces(true);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Contactanos</h2>
            <form onSubmit={onSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Tu nombre</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="from_name"
                      placeholder="Nombre"
                      value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Tu teléfono</Label>
                    <Input
                      id="phone-input"
                      type="number"
                      name="phone"
                      placeholder="Contacto"
                      value={toSend.phone}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Tu email (opcional)</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={toSend.email}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Tu consulta</Label>
                    <TextArea
                      id="message-input"
                      type="text"
                      name="message"
                      placeholder="Mensaje"
                      value={toSend.message}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit" value="Submit">
                Enviar
              </SubmitButton>
              <LoadingButton>
                <SvgLoading></SvgLoading>Cargando
              </LoadingButton>
            </form>
            {showSuccess ? <h1>Mail enviado correctamente</h1> : <div></div>}
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
